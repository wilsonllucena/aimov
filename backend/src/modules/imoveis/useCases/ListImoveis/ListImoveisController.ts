import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListImoveisUseCase } from "./ListImoveisUseCase";
class ListImoveisController {

    async handle(request: Request,response: Response):Promise<Response> {
        try {
            const listImoveis = container.resolve(ListImoveisUseCase);
            const imoveis = await listImoveis.execute();
            return response.json(imoveis);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ "error": error.message })
            }
            return response.status(500).json({ "error": error.message })
        }
    }
}

export { ListImoveisController };