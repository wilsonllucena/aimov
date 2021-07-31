import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProprietarioUseCase } from "./GetProprietarioUseCase";

class GetProprietarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;
			const getProprietarioId = container.resolve(GetProprietarioUseCase);
			const proprietario = await getProprietarioId.execute(Number(id));
			return response.json(proprietario);
		} catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json(error.message);
            }
            return response.status(500).json(error.message);
        }
	}
}
export { GetProprietarioController };
