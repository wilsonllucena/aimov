import IEspecificacaoDTO from "./IEspecificacaoDTO";
import IProprietarioDTO from "./IProprietarioDTO";

interface ICreateImovelDTO {
    id?: number,
    id_proprietario: number,
    id_especificacao: number,
    id_situacao_imovel: number,
    id_autorizacao: number,
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

export default ICreateImovelDTO;