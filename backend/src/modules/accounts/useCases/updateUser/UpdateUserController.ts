import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { name, full_name, email, document, address, address_complement, cep, password, old_password, is_admin, user_id } = request.body;

    const { id } = request.user;
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({
      name,
      full_name,
      email, document,
      address,
      address_complement,
      cep,
      password,
      old_password,
      is_admin,
      user_id: id
    })

    return response.status(200).json(user)
  }
}

export { UpdateUserController }