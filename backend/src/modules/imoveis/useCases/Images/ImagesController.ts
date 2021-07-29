import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImagesUseCase } from "./ImagesUseCase";
class ImagesController {

    async handle(request: Request,response: Response):Promise<Response> {
        try {
            const { id_imovel } = request.params
            const imagesUseCase = container.resolve(ImagesUseCase);
            const imagens = await imagesUseCase.execute({id_imovel});
            return response.json(imagens);
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ "error": error.message })
            }
            return response.status(500).json({ "error": error.message })
        }
    }
}

export { ImagesController };