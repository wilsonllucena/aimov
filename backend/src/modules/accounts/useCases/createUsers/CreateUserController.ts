import { container } from "tsyringe";
import { Request, Response } from 'express'
import { CreateUserUseCase } from "./CreateUserUseCase";
class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, last_name, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      last_name,
      email,
      password
    })

    return response.status(201).json()
  }

}

export { CreateUserController }