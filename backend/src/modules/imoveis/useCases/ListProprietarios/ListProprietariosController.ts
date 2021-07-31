import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProprietariosUseCase } from "./ListProprietariosUseCase";
class ListProprietariosController {

    async handle(request: Request,response: Response):Promise<Response> {
        try {
            const listProprietarios = container.resolve(ListProprietariosUseCase);
            const proprietarios = await listProprietarios.execute();
            return response.json(proprietarios);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ "error": error.message })
            }
            return response.status(500).json({ "error": error.message })
        }
    }
}

export { ListProprietariosController };