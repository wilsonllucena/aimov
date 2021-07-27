import { inject, injectable } from "tsyringe";
import { deleteFile } from "@utils/file";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { IImagensRepository } from "@modules/imoveis/repositories/IImagesRepository";

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
		private imagensRepository: IImagensRepository
	) {}

	async execute(data: IRequest): Promise<void> {
        const id_imovel = Number(data.id_imovel);
        const {nome} = data;
        
		const imovel = await this.imovelRepository.findById(id_imovel);
		//delete arquivo se existir
		if (imovel) {
			await deleteFile(`./tmp/upload/imagens/${data.file}`);
		}

        const file = `/tmp/upload/imagens/${data.file}`

		await this.imagensRepository.create({ id_imovel, nome, file });

	}
}

export { UploadUseCase };
