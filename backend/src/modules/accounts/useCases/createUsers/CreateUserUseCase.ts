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

  async execute({ name, email, password, cpf, fone , is_creator}: ICreateUsersDTO): Promise<void> {

    const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);

    const userCpfAlreadyExists = await this.usersRepository.findByCpf(cpf);

    if (userEmailAlreadyExists || userCpfAlreadyExists ) {
      throw new AppError("Já existe usuário cadastrado com mesmo documento ou email")
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      cpf,
      email,
      fone,
      password: passwordHash,
      is_creator
    })
  }
}

export { CreateUserUseCase }