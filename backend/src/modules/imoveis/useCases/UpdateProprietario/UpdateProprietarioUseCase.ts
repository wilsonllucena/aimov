import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { IProprietarioRepository } from "@modules/imoveis/repositories/IProprietarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";

interface IRequest {
	nome: string;
	documento: string;
	email: string;
	telefone: string;
	id_imovel: number;
}

@injectable()
class UpdateProprietarioUseCase {
	constructor(
		@inject("ProprietarioRepository")
		private proprietarioRespository: IProprietarioRepository,
		@inject("ImovelRepository") private imovelRepository: IImovelRepository
	) {}

	async execute(
		user_id: string,
		id: string,
		data: IRequest
	): Promise<UpdateResult> {
		const imovel = await this.imovelRepository.findById(
			Number(data.id_imovel)
		);
		const proprietario = await this.proprietarioRespository.findById(
			Number(id)
		);

		if (!imovel) {
			throw new AppError("Imovel não foi encontrado");
		}

		if (!proprietario) {
			throw new AppError("Proprietário não foi encontrado");
		}

		imovel.id_usuario_ultima_alteracao =
			user_id ?? imovel.id_usuario_ultima_alteracao;

		//Compara e atualiza o objeto somente os que mudaram
		Object.assign(proprietario, data);

		return this.proprietarioRespository.update(proprietario);
	}
}

export { UpdateProprietarioUseCase };
