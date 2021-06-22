import { container } from "tsyringe";
import { Request, Response } from 'express'
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppError } from "@shared/errors/AppError";
class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const { name, full_name, email, address, document, password, is_admin } = request.body;
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
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ "error": error.message })
      }
      return response.json({ "error": error.message })
    }


  }

}

export { CreateUserController }