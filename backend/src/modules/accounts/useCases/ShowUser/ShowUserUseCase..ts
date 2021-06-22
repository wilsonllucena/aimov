import { inject, injectable } from "tsyringe";
import { hash, compare } from 'bcrypt';
import User from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { classToClass } from "class-transformer";
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";


interface IRequest {
  user_id: string,
}
@injectable()
class ShowUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Usuário não foi encontrado")
    }

    return classToClass(user);
  }
}

export { ShowUserUseCase }