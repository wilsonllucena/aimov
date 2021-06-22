import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import User from "../entities/User";


interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User | void>
  findByEmail(email: string): Promise<User | undefined>
  findByDocument(document: string): Promise<User | undefined>
  findById(id: string): Promise<User | undefined>
  list(): Promise<User[]>;
  save(user: User): Promise<User>;
}

export { IUsersRepository, ICreateUsersDTO }