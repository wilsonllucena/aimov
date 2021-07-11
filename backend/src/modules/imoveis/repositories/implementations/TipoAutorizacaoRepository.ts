import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import ITipoAutorizacaoRepository from '../ITipoAutorizacaoRepository';
import TipoAutorizacao from '@modules/imoveis/entities/TipoAutorizacao';

@injectable()
class TipoAutorizacaoRepository implements ITipoAutorizacaoRepository {
  private repository: Repository<TipoAutorizacao>;

  constructor() {
    this.repository = getRepository(TipoAutorizacao);
  }

  async findById(id: string): Promise<TipoAutorizacao | undefined> {
    const tipoAutorizacao = await this.repository.findOne(id);
    return tipoAutorizacao;
  }
  
}

export default TipoAutorizacaoRepository;
