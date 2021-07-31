import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { IProprietarioRepository } from "@modules/imoveis/repositories/IProprietarioRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteProprietarioUseCase {
	constructor(
		@inject("ProprietarioRepository") private proprietarioRespository: IProprietarioRepository,
	) {}
	async execute(id: string): Promise<void> {
        const idProprietario = parseInt(id);
		const proprietario = await this.proprietarioRespository.findById(idProprietario);
      
		if (!proprietario) {
			throw new Error("Proprietario não foi encontrado");
		}

		await this.proprietarioRespository.delete(proprietario);
	}
}

export { DeleteProprietarioUseCase };
