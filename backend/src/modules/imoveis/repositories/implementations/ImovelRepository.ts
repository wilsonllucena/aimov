import { injectable } from "tsyringe";
import { getRepository, Repository, UpdateResult } from "typeorm";
import { IImovelRepository, ICreateImovelDTO } from "../IImovelRepository";
import Imovel from "@modules/imoveis/entities/Imovel";

@injectable()
class ImovelRepository implements IImovelRepository {
	private repository: Repository<Imovel>;

	constructor() {
		this.repository = getRepository(Imovel);
	}


    // Só recupera imoveis ativos os desativados foram excluidos
	list(): Promise<Imovel[]> {
		return this.repository.find({ where: { ativo: true } });
	}

	async create({
		id,
		nome_proprietario,
		documento_proprietario,
		email_proprietario,
		telefone_proprietario,
		id_usuario_responsavel,
		cidade,
		bairro,
		endereco,
		cep,
		uf,
		regiao,
		data_anuncio,
		quantidade_quartos,
		quantidade_suites,
		garagem,
		metragem,
		observacoes,
		tipo,
	}: ICreateImovelDTO): Promise<Imovel | void> {
		const imovel = this.repository.create({
			id,
			nome_proprietario,
			documento_proprietario,
			email_proprietario,
			telefone_proprietario,
			id_usuario_responsavel,
			cidade,
			bairro,
			endereco,
			cep,
			uf,
			regiao,
			data_anuncio,
			quantidade_quartos,
			quantidade_suites,
			garagem,
			metragem,
			observacoes,
			tipo,
		});

		await this.repository.save(imovel);
	}

   
	public async save(imovel: Imovel): Promise<Imovel> {
		return this.repository.save(imovel);
	}

    public async update(imovel: Imovel): Promise<UpdateResult> {
		return this.repository.update({id: imovel.id}, imovel);
	}

	async findById(id: number): Promise<Imovel | undefined> {
		const imovel = await this.repository.findOne({ where: { id, ativo: true } });
		return imovel;
	}

	async findByDocumentoProprietario(
		documento_proprietario: string
	): Promise<Imovel | undefined> {
		const imovel = await this.repository.findOne({
			documento_proprietario,
		});
		return imovel;
	}

	async findByTipo(tipo: string): Promise<Imovel[]> {
		return await this.repository.find({ tipo });
	}
}

export { ImovelRepository };
