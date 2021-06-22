import { inject, injectable } from "tsyringe";
import User from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { classToClass } from "class-transformer";

interface IRequest {
  user_id: string,
  active: boolean
}
@injectable()
class EnableDisableUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ active, user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Usuário não foi encontrado")
    }

    user.active = active ?? user.active;

    const userUpdated = this.usersRepository.save(classToClass(user))
    return userUpdated
  }
}

export { EnableDisableUserUseCase }