import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowUserUseCase } from './ShowUserUseCase.';

class ShowUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const { user_id } = request.params;
      const showUserUseCase = container.resolve(ShowUserUseCase);
      const user = await showUserUseCase.execute({
        user_id,
      });

      return response.status(201).json(user)
    } catch (errorResponse) {
      return response.status(404).json({ "error": errorResponse.message })
    }

  }
}

export { ShowUserController }