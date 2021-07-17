import IUpdateImovelDTO from "@modules/imoveis/dtos/IUpdateImovelDTO";
import Imovel from "@modules/imoveis/entities/Imovel";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteImovelUseCase {
	constructor(
		@inject("ImovelRepository") private imovelRepository: IImovelRepository
	) {}
	async execute(id: number, user_id: string): Promise<Imovel> {
		const imovel = await this.imovelRepository.findById(id);

		if (!imovel) {
			throw new Error("Imovel não encontrado");
		}
        imovel.ativo = false;
        imovel.id_usuario_ultima_alteracao = user_id 
		return await this.imovelRepository.save(imovel);
	}
}

export { DeleteImovelUseCase };
