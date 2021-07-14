import IEspecificacaoDTO from "@modules/imoveis/dtos/IEspecificacaoDTO";
import IProprietarioDTO from "@modules/imoveis/dtos/IProprietarioDTO";


interface CreateImovelDTO {
    id?: number,
    id_proprietario: number,
    id_especificacao: number,
    id_situacao_imovel?: number,
    id_autorizacao?: number,
    proprietario: IProprietarioDTO,
    especificacao?: IEspecificacaoDTO,
    cep: string,
    endereco: string,
    cidade: string,
    bairro: string,
    regiao: string,
    data_anuncio?: Date,
    id_usuario_responsavel: number,
    id_usuario_ultima_alteracao?: number,
    ativo?: boolean,
    observacoes?: string,
}

export default CreateImovelDTO;