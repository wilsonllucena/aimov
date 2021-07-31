import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProprietarioUseCase } from "./DeleteProprietarioUseCase";

class DeleteProprietarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;
			const deleteProprietarioUseCase = container.resolve(
				DeleteProprietarioUseCase
			);
			await deleteProprietarioUseCase.execute(id);
			return response.status(204).send();
		} catch (error) {
			if (error instanceof AppError) {
				return response.status(error.statusCode).send(error.message);
			}
			return response.status(500).send(error.message);
		}
	}
}
export { DeleteProprietarioController };
