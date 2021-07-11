export default interface ISituacaoImovel {
    id?: number;
    id_imovel: number;
    id_situacao: number;
    justificativa: string;
    data_venda?: Date;
}