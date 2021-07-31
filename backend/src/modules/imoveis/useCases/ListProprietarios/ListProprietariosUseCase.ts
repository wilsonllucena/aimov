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

    async execute(): Promise<Proprietario[]> {
        const proprietarios = await this.proprietarioRepository.list();
        return classToClass(proprietarios);
    }
};

export { ListProprietariosUseCase }