import Imovel from "@modules/imoveis/entities/Imovel";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class GetImovelUseCase {
	constructor(
		@inject("ImovelRepository")
		private repository: IImovelRepository
	) {}

	async execute(id: number): Promise<Imovel | undefined> {
		const imovel = await this.repository.findById(id);
		if (!imovel) {
			throw new AppError("Imovel não foi encontrado");
		}
		return imovel;
	}
}

export { GetImovelUseCase };
