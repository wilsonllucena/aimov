import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListScoresUseCase } from "./ListScoresUseCase";

class ListScoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listScoreseCase = container.resolve(ListScoresUseCase);
    const users = await listScoreseCase.execute();
    return response.json(users)
  }
}

export { ListScoresController }