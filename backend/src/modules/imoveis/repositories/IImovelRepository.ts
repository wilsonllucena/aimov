import ICreateImovelDTO from "../dtos/ICreateImovelDTO";
import Imovel from "../entities/Imovel";

interface IImovelRepository{
  create(data: ICreateImovelDTO): Promise<Imovel | void>
  findById(id: string): Promise<Imovel | undefined>
  list(): Promise<Imovel[]>;
  save(user: Imovel): Promise<Imovel>;
}

export { IImovelRepository, ICreateImovelDTO }