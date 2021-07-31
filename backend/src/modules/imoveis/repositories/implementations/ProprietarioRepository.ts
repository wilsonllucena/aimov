import { injectable } from "tsyringe";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import {
	IProprietarioDTO,
	IProprietarioRepository,
} from "../IProprietarioRepository";
import Proprietario from "@modules/imoveis/entities/Proprietario";

@injectable()
class ProprietarioRepository implements IProprietarioRepository {
	private repository: Repository<Proprietario>;

	constructor() {
		this.repository = getRepository(Proprietario);
	}

	update(proprietario: Proprietario): Promise<UpdateResult> {
		return this.repository.update({ id: proprietario.id }, proprietario);
	}

	list(): Promise<Proprietario[]> {
		return this.repository.find();
	}

	async create({
		nome,
		documento,
		email,
		telefone,
		id_imovel,
	}: IProprietarioDTO): Promise<Proprietario | void> {
		const imovel = this.repository.create({
			nome,
			documento,
			email,
			telefone,
			id_imovel,
		});

		await this.repository.save(imovel);
	}

	async save(proprietario: Proprietario): Promise<Proprietario> {
		return this.repository.save(proprietario);
	}

	async findById(id: number): Promise<Proprietario | undefined> {
		const proprietario = await this.repository.findOne(id);
		return proprietario;
	}

	async delete(proprietario: Proprietario): Promise<DeleteResult> {
		return await this.repository.delete({ id: proprietario.id });
	}

	async findByDocumento(
		documento: string
	): Promise<Proprietario | undefined> {
		const proprietario = await this.repository.findOne(documento);
		return proprietario;
	}
}

export { ProprietarioRepository };
