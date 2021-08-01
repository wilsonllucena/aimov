import Proprietario from "@modules/imoveis/entities/Proprietario";
import { IProprietarioRepository } from "@modules/imoveis/repositories/IProprietarioRepository";
import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProprietariosUseCase {
    constructor( 
        @inject("ProprietarioRepository")
        private proprietarioRepository: IProprietarioRepository
        ) { }

    async execute(id_imovel: string): Promise<Proprietario[]> {
        const proprietarios = await this.proprietarioRepository.findByIdImovel(parseInt(id_imovel));
        return classToClass(proprietarios);
    }
};

export { ListProprietariosUseCase }