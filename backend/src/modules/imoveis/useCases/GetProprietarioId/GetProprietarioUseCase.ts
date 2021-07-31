import Proprietario from "@modules/imoveis/entities/Proprietario";
import { IProprietarioRepository } from "@modules/imoveis/repositories/IProprietarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class GetProprietarioUseCase {
	constructor(
        @inject("ProprietarioRepository")
        private proprietarioRepository: IProprietarioRepository
	) {}

	async execute(id: number): Promise<Proprietario | undefined> {
		const proprietario = await this.proprietarioRepository.findById(id);
		if (!proprietario) {
			throw new AppError("Proprietário não foi encontrado");
		}
		return proprietario;
	}
}

export { GetProprietarioUseCase };
