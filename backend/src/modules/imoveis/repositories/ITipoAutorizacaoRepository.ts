import TipoAutorizacao from "../entities/TipoAutorizacao";

interface ITipoAutorizacaoRepository {
  findById(id: string): Promise<TipoAutorizacao | undefined>
}

export default  ITipoAutorizacaoRepository;