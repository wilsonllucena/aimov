import { inject, injectable } from "tsyringe";
import { hash, compare } from 'bcrypt';
import User from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { classToClass } from "class-transformer";
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";


@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, full_name, email, document, address, address_complement, cep, password, old_password, is_admin, user_id }: IUpdateUserDTO): Promise<User> {
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
    user.full_name = full_name ?? user.full_name;
    user.document = document ?? user.document;
    user.cep = cep ?? user.cep;
    user.address = address ?? user.address;
    user.address_complement = address_complement ?? user.address_complement;
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

    const userUpdated = this.usersRepository.save(classToClass(user))
    return userUpdated
  }
}

export { UpdateUserUseCase }