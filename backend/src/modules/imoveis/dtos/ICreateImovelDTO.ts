import IEspecificacaoDTO from "./IEspecificacaoDTO";
import IProprietarioDTO from "./IProprietarioDTO";

interface ICreateImovelDTO {
    id?: number,
    nome_proprietario: string,
    telefone_proprietario: string,
    email_proprietario: string,
    documento_proprietario: string,
    id_proprietario?: number,
    id_especificacao?: number,
    id_situacao_imovel?: number,
    id_autorizacao?: number,
    cep: string,
    endereco: string,
    cidade: string,
    bairro: string,
    uf:string,
    regiao: string,
    latitude?: string,
    longitude?: string
    quantidade_quartos?: number;
    quantidade_suites?: number;
    garagem?: boolean;
    metragem?: number;
    data_anuncio?: Date,
    id_usuario_responsavel: string,
    id_usuario_ultima_alteracao?: string,
    ativo?: boolean,
    observacoes?: string,
    tipo:string,
}

export default ICreateImovelDTO;