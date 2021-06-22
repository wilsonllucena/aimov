import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EnableDisableUserUseCase } from './EnableDisableUserUseCase.';

class EnableDisableUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const { active } = request.body;
      const { user_id } = request.params;

      const enableDisableUserController = container.resolve(EnableDisableUserUseCase);
      await enableDisableUserController.execute({
        user_id,
        active
      })
      return response.status(201).json()
    } catch (errorResponse) {
      return response.status(404).json({ "error": errorResponse.message })
    }

  }
}

export { EnableDisableUserController }