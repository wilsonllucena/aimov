import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import {
  IProprietarioDTO,
  IProprietarioRepository,
} from '../IProprietarioRepository';
import Proprietario from '@modules/imoveis/entities/Proprietario';

@injectable()
class ProprietarioRepository implements IProprietarioRepository {
  private repository: Repository<Proprietario>;

  constructor() {
    this.repository = getRepository(Proprietario);
  }
  list(): Promise<Proprietario[]> {
    return this.repository.find();
  }

  async create({
    nome,
    documento,
    email,
    telefone,
  }: IProprietarioDTO): Promise<Proprietario | void> {
    const imovel = this.repository.create({
      nome,
      documento,
      email,
      telefone,
    });

    await this.repository.save(imovel);
  }

  public async save(proprietario: Proprietario): Promise<Proprietario> {
    return this.repository.save(proprietario);
  }

  async findById(id: string): Promise<Proprietario | undefined> {
    const proprietario = await this.repository.findOne(id);
    return proprietario;
  }
}

export { ProprietarioRepository };
