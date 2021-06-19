import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import User from "../entities/User";


interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User | void>
  findByEmail(email: string): Promise<User | undefined>
  // findByCpf(cpf: string): Promise<User | undefined>
  findById(id: string): Promise<User | undefined>
  save(user: User): Promise<User>;
}

export { IUsersRepository, ICreateUsersDTO }