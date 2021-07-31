import { DeleteResult, UpdateResult } from "typeorm";
import IProprietarioDTO from "../dtos/IProprietarioDTO";
import Proprietario from "../entities/Proprietario";

interface IProprietarioRepository{
  create(data: IProprietarioDTO): Promise<Proprietario | void>
  findById(id: number): Promise<Proprietario | undefined>
  delete(proprietario: Proprietario): Promise<DeleteResult>
  update(proprietario: Proprietario): Promise<UpdateResult>
  findByDocumento(documento: string): Promise<Proprietario | undefined>
  list(): Promise<Proprietario[]>;
  save(proprietario: Proprietario): Promise<Proprietario>;
}

export { IProprietarioRepository, IProprietarioDTO }