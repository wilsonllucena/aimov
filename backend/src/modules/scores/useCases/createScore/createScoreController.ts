import { container } from "tsyringe";
import { Request, Response } from 'express'
import { AppError } from "@shared/errors/AppError";
import { CreateScoreUseCase } from "./createScoreUseCase";

class CreateScoreController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const { title, description, value  } = request.body;
      
      const createScoreUseCase = container.resolve(CreateScoreUseCase);

      await createScoreUseCase.execute({
        title,
        description,
        value
      })

      return response.status(201).json(value)
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ "error": error.message })
      }
      return response.json({ "error": error.message })
    }


  }

}

export { CreateScoreController }