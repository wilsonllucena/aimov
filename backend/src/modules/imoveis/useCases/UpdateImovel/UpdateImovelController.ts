import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateImovelUseCase } from "./UpdateImovelUseCase";

class UpdateImovelController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
            const { id } = request.user;
			const dataRequest = request.body;
			const updateImovelUseCase = container.resolve(UpdateImovelUseCase);
			const imovel = await updateImovelUseCase.execute(id,dataRequest);
			return response.status(201).json(imovel);
		} catch (error) {
			if (error instanceof AppError) {
				return response.status(error.statusCode).send(error.message);
			}
			return response.status(500).send(error);
		}
	}
}
export { UpdateImovelController };
