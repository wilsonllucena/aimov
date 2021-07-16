import Imovel from '@modules/imoveis/entities/Imovel';
import {
  ICreateImovelDTO,
  IImovelRepository,
} from '@modules/imoveis/repositories/IImovelRepository';
import { IProprietarioRepository } from '@modules/imoveis/repositories/IProprietarioRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateImovelUseCase {
  constructor(
    @inject('ImovelRepository')
    private imovelRepository: IImovelRepository,
  ) {}

  async execute({
    nome_proprietario,
    documento_proprietario,
    email_proprietario,
    telefone_proprietario,
    id_usuario_responsavel,
    cidade,
    bairro,
    uf,
    endereco,
    cep,
    latitude,
    longitude,
    regiao,
    data_anuncio,
    quantidade_quartos,
    quantidade_suites,
    garagem,
    metragem,
    tipo,
    observacoes
  }: ICreateImovelDTO): Promise<Imovel | void> {

const proprietarioDocumento = await this.imovelRepository.findByDocumentoProprietario(documento_proprietario);

if(proprietarioDocumento){
    throw new AppError(`Já existe proprietário com o documento ${documento_proprietario}.`);
}

  const imovel = await this.imovelRepository.create({
        nome_proprietario,
        documento_proprietario,
        email_proprietario,
        telefone_proprietario,
        id_usuario_responsavel,
        cidade,
        bairro,
        endereco,
        uf,
        cep,
        latitude,
        longitude,
        regiao,
        data_anuncio,
        quantidade_quartos,
        quantidade_suites,
        garagem,
        metragem,
        observacoes,
        tipo
    });
    return imovel;
  }
}

export { CreateImovelUseCase };
