import { container } from "tsyringe";
import { Request, Response } from 'express'
import { CreateUserUseCase } from "./CreateUserUseCase";
class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, full_name, email, address, document, password, is_admin, } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      full_name,
      email,
      address,
      document,
      password,
      is_admin,
    })

    return response.status(201).json()
  }

}

export { CreateUserController }