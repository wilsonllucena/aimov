import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetImovelUseCase } from "./GetImovelUseCase";

class GetImovelController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;
			const getImovelUseCase = container.resolve(GetImovelUseCase);
			const imovel = await getImovelUseCase.execute(Number(id));
			return response.json(imovel);
		} catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json(error.message);
            }
            return response.status(500).json(error.message);
        }
	}
}
export { GetImovelController };
