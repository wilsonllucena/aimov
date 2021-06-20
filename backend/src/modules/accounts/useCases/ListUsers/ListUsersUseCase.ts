import User from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(): Promise<User[]> {
    const users = this.usersRepository.list()
    return classToClass(users);
  }
}

export { ListUsersUseCase };