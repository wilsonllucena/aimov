import { UpdateResult } from "typeorm";
import { IImagensDTO } from "../dtos/IImagensDTO";
import { Imagens } from "../entities/Imagens";

interface IImagensRepository{
  create(data: IImagensDTO): Promise<Imagens | void>
  findById(id: number): Promise<Imagens | undefined>
  update(imagem: Imagens): Promise<UpdateResult>
  list(): Promise<Imagens[]>;
  save(imagem: Imagens): Promise<Imagens>;
}


export { IImagensRepository, IImagensDTO }