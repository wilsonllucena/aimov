import { inject, injectable } from "tsyringe";
import { hash, compare } from 'bcrypt';
import User from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequestUpdate {
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  old_password?: string;
  is_admin?: boolean;
  user_id: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, last_name, email, password, old_password, is_admin, user_id }: IRequestUpdate): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found")
    }

    if (email) {
      const userWithUpdateEmail = await this.usersRepository.findByEmail(email);

      if (userWithUpdateEmail && userWithUpdateEmail.id !== user_id) {
        throw new AppError('E-mail already in use');
      }
    }

    user.name = name ?? user.name;
    user.last_name = last_name ?? user.last_name;
    user.email = email ?? user.email;
    user.is_admin = is_admin ?? user.is_admin

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      const passwordHash = await hash(password, 8);

      user.password = passwordHash;

    }

    const userUpdated = this.usersRepository.save(user)
    return userUpdated
  }
}

export { UpdateUserUseCase }