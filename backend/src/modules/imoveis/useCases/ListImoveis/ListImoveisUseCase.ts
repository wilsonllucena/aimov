import Imovel from "@modules/imoveis/entities/Imovel";
import { IImovelRepository } from "@modules/imoveis/repositories/IImovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListImoveisUseCase {
    constructor( 
        @inject("ImovelRepository")
        private imovelRepository: IImovelRepository
        ) { }

    async execute(): Promise<Imovel[]> {
        const imoveis = await this.imovelRepository.list();
        return imoveis;
    }
};

export { ListImoveisUseCase }