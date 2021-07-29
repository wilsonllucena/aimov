import { inject, injectable } from "tsyringe";
import { deleteFile } from "@utils/file";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { IImagensRepository } from "@modules/imoveis/repositories/IImagesRepository";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";

interface IRequest {
	id_imovel: string;
	nome: string;
	file: string;
}

@injectable()
class UploadUseCase {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: IImovelRepository,
		@inject("ImagensRepository")
		private imagensRepository: IImagensRepository,
		@inject("StorageProvider")
		private storageProvider: IStorageProvider
	) {}

	async execute(data: IRequest): Promise<void> {
		const id_imovel = Number(data.id_imovel);
		const { nome, file } = data;

		await this.storageProvider.saveFile(file);

		await this.imagensRepository.create({ id_imovel, nome, file });
	}
}

export { UploadUseCase };
