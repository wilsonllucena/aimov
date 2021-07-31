import Proprietario from '@modules/imoveis/entities/Proprietario';
import { IProprietarioRepository } from '@modules/imoveis/repositories/IProprietarioRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
    nome: string;
	documento: string;
	email: string;
	telefone: string;
    id_imovel: number;
}
@injectable()
class CreateProprietarioUseCase {

    constructor( 
        @inject("ProprietarioRepository")
        private proprietarioRepository: IProprietarioRepository
        ) { }

  async execute(data: IRequest): Promise<Proprietario | void> {

const proprietarioDocumento = await this.proprietarioRepository.findByDocumento(data.documento);

if(proprietarioDocumento){
    throw new AppError(`Já existe proprietário com o documento ${data.documento}.`);
}

  const imovel = await this.proprietarioRepository.create(data);
    return imovel;
  }
}

export { CreateProprietarioUseCase };
