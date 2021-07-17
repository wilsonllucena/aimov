import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteImovelUseCase } from "./DeleteImovelUseCase";

class DeleteImovelController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
            const { id : user_id} = request.user;
			const {id} = request.params;
			const deleteImovelUseCase = container.resolve(DeleteImovelUseCase);
			const imovel = await deleteImovelUseCase.execute(Number(id),user_id);
			return response.status(201).send();
		} catch (error) {
			if (error instanceof AppError) {
				return response.status(error.statusCode).send(error.message);
			}
			return response.status(500).send(error.message);
		}
	}
}
export { DeleteImovelController };
