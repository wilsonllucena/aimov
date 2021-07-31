import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProprietarioUseCase } from "./CreateProprietarioUseCase";

class CreateProprietarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { id_imovel } = request.params;

			const { nome, documento, email, telefone } = request.body;
			const createProprietarioUseCase = container.resolve(CreateProprietarioUseCase);
			await createProprietarioUseCase.execute({
				nome,
				documento,
				email,
				telefone,
				id_imovel: Number(id_imovel)
			});

			return response.status(201).json();
		} catch (error) {
			if (error instanceof AppError) {
				return response
					.status(error.statusCode)
					.json({ error: error.message });
			}

			return response.status(500).json({ error: error.message });
		}
	}
}

export { CreateProprietarioController };
