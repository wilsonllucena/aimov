import Imovel from '@modules/imoveis/entities/Imovel';
import {
  ICreateImovelDTO,
  IImovelRepository,
} from '@modules/imoveis/repositories/IImovelRepository';
import { IProprietarioRepository } from '@modules/imoveis/repositories/IProprietarioRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import CreateImovelDTO from './CreateImovelDTO';

@injectable()
class CreateImovelUseCase {
  constructor(
    @inject('ImovelRepository')
    private imovelRepository: IImovelRepository,
    @inject('ProprietarioRepository')
    private proprietarioRepository: IProprietarioRepository,
  ) {}

  async execute({
    proprietario,
    especificacao,
    id_usuario_responsavel,
    cidade,
    bairro,
    endereco,
    cep,
    regiao,
    observacoes,
    data_anuncio,
  }: CreateImovelDTO): Promise<Imovel | void> {
    const proprietarioExiste =
      await this.proprietarioRepository.findByDocumento(proprietario.documento);

    if (proprietarioExiste) {
      throw new AppError('Prorietário ja esta cadastrado');
    }

    const proprietarioData = await this.proprietarioRepository.create(
      proprietario,
    );

    await this.imovelRepository.create({
      id_proprietario: proprietarioData.id,
      id_especificacao,
      id_usuario_responsavel,
      cidade,
      bairro,
      endereco,
      cep,
      regiao,
      observacoes,
      data_anuncio,
    });
  }
}

export { CreateImovelUseCase };
