import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProprietarioUseCase } from "./UpdateProprietarioUseCase";

class UpdateProprietarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
            const { id:user_id} = request.user;
			const dataRequest = request.body;
            const { id } = request.params;
			const updateProprietario = container.resolve(UpdateProprietarioUseCase);
			await updateProprietario.execute(user_id, id, dataRequest);
			return response.status(201).json();
		} catch (error) {
			if (error instanceof AppError) {
				return response.status(error.statusCode).send(error.message);
			}
			return response.status(500).send(error);
		}
	}
}
export { UpdateProprietarioController };
