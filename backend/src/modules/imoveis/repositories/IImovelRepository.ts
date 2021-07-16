import ICreateImovelDTO from "../dtos/ICreateImovelDTO";
import Imovel from "../entities/Imovel";

interface IImovelRepository{
  create(data: ICreateImovelDTO): Promise<Imovel | void>
  findById(id: string): Promise<Imovel | undefined>
  findByDocumentoProprietario(documento_proprietario: string): Promise<Imovel | undefined>
  findByTipo(tipo: string): Promise<Imovel[]>
//   findAll(): Promise<Imovel[]>
//   update(imovel: Imovel): Promise<Imovel>
//   delete(imovel: Imovel): Promise<void>
  list(): Promise<Imovel[]>;
  save(user: Imovel): Promise<Imovel>;
}


export { IImovelRepository, ICreateImovelDTO }