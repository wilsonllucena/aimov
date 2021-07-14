import IProprietarioDTO from "../dtos/IProprietarioDTO";
import Proprietario from "../entities/Proprietario";

interface IProprietarioRepository{
  create(data: IProprietarioDTO): Promise<Proprietario | void>
  findById(id: string): Promise<Proprietario | undefined>
  findByDocumento(documento: string): Promise<Proprietario | undefined>
  list(): Promise<Proprietario[]>;
  save(proprietario: Proprietario): Promise<Proprietario>;
}

export { IProprietarioRepository, IProprietarioDTO }