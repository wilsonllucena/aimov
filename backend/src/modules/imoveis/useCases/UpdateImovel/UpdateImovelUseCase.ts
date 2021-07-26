import IUpdateImovelDTO from "@modules/imoveis/dtos/IUpdateImovelDTO";
import Imovel from "@modules/imoveis/entities/Imovel";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";

@injectable()
class UpdateImovelUseCase {
	constructor(
		@inject("ImovelRepository") private imovelRepository: IImovelRepository
	) {}
	async execute(user_id: string,data: IUpdateImovelDTO): Promise<UpdateResult> {
		const imovel = await this.imovelRepository.findById(Number(data.id));

		if (!imovel) {
			throw new Error("Imovel não encontrado");
		}

        imovel.id_usuario_ultima_alteracao = user_id ?? imovel.id_usuario_ultima_alteracao;
		//Compara e atualiza o objeto somente os que mudaram
		Object.assign(imovel, data);

		return await this.imovelRepository.update(imovel);
	}
}

export { UpdateImovelUseCase };
