import { injectable } from "tsyringe";
import { getRepository, Repository, UpdateResult } from "typeorm";
import { IImagensRepository, IImagensDTO } from "../IImagesRepository";
import { Imagens } from "@modules/imoveis/entities/Imagens";

@injectable()
class ImagensRepository implements IImagensRepository {
	private repository: Repository<Imagens>;

	constructor() {
		this.repository = getRepository(Imagens);
	}


	list(): Promise<Imagens[]> {
		return this.repository.find();
	}

	async create({
		nome,
		id_imovel,
		file,
	}: IImagensDTO): Promise<Imagens | void> {
		const imagem = this.repository.create({
			nome,
			id_imovel,
			file,
		});

		await this.repository.save(imagem);
	}

	public async save(imagem: Imagens): Promise<Imagens> {
		return this.repository.save(imagem);
	}

	update(imagem: Imagens): Promise<UpdateResult> {
		return this.repository.update({ id: imagem.id }, imagem);
	}

	async findById(id: number): Promise<Imagens | undefined> {
		const imagem = await this.repository.findOne(id);
		return imagem;
	}

    async findByIdImovel(id_imovel: number): Promise<Imagens[]> {
        const imagens = await this.repository.find({id_imovel});
		return imagens;
    }
}

export { ImagensRepository };
