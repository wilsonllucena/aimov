import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import User from "@modules/accounts/entities/User";
import { IUsersRepository, ICreateUsersDTO } from "../IUsersRepository";


@injectable()
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, email, last_name, password, avatar, is_admin, active, id }: ICreateUsersDTO): Promise<User | void> {
    const user = this.repository.create({
      name,
      last_name,
      email,
      password,
      avatar,
      is_admin,
      active,
      id
    })

    await this.repository.save(user);
  }

  public async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  // async findByCpf(cpf: string): Promise<User | undefined> {
  //   const user = await this.repository.findOne({ cpf });
  //   return user;
  // }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository }