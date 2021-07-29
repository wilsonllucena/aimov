import { Imagens } from "@modules/imoveis/entities/Imagens";
import { IImagensRepository } from "@modules/imoveis/repositories/IImagesRepository";
import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id_imovel: string
}
@injectable()
class ImagesUseCase {
    constructor( 
        @inject("ImagensRepository")
        private imagensRepository: IImagensRepository,
      
        ) { }

    async execute(data :IRequest): Promise<Imagens[]> {
        const id_imovel = parseInt(data.id_imovel);
        const imagens = await this.imagensRepository.findByIdImovel(id_imovel);
        return classToClass(imagens);
    }
};

export { ImagesUseCase }