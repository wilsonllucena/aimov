import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import {
    IImovelRepository,
  ICreateImovelDTO,
} from '../IImovelRepository';
import Imovel from '@modules/imoveis/entities/Imovel';

@injectable()
class ImovelRepository implements IImovelRepository {
  private repository: Repository<Imovel>;

  constructor() {
    this.repository = getRepository(Imovel);
  }
  list(): Promise<Imovel[]> {
    return this.repository.find();
  }

  async create({
    id,
    id_proprietario,
    id_especificacao,
    id_situacao_imovel,
    id_autorizacao,
    cep,
    endereco,
    cidade,
    bairro,
    regiao,
    id_usuario_responsavel,
    id_usuario_ultima_alteracao,
    observacoes,
  }: ICreateImovelDTO): Promise<Imovel | void> {
    const imovel = this.repository.create({
      id,
      id_proprietario,
      id_especificacao,
      id_situacao_imovel,
      id_autorizacao,
      cep,
      endereco,
      cidade,
      bairro,
      regiao,
      id_usuario_responsavel,
      id_usuario_ultima_alteracao,
      observacoes,
    });

    await this.repository.save(imovel);
  }

  public async save(imovel: Imovel): Promise<Imovel> {
    return this.repository.save(imovel);
  }

  async findById(id: string): Promise<Imovel | undefined> {
    const imovel = await this.repository.findOne(id);
    return imovel;
  }
}

export { ImovelRepository };
