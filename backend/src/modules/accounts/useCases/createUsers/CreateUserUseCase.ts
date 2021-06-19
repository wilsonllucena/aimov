import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt';
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository, ICreateUsersDTO } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, last_name, password, is_admin }: ICreateUsersDTO): Promise<void> {

    const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userEmailAlreadyExists) {
      throw new AppError("Já existe usuário cadastrado com mesmo documento ou email")
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      last_name,
      email,
      password: passwordHash,
      is_admin
    })
  }
}

export { CreateUserUseCase }