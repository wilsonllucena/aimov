import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import User from '@modules/accounts/entities/User';
import { IUsersRepository, ICreateUsersDTO } from '../IUsersRepository';

@injectable()
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  list(): Promise<User[]> {
    return this.repository.find();
  }

  async create({
    name,
    full_name,
    email,
    address,
    document,
    password,
    avatar,
    is_admin,
    id,
  }: ICreateUsersDTO): Promise<User | void> {
    const user = this.repository.create({
      name,
      full_name,
      email,
      document,
      address,
      password,
      avatar,
      is_admin,
      id,
    });

    await this.repository.save(user);
  }

  public async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByDocument(document: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ document });
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
