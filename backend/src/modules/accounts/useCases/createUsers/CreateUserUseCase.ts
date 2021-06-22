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

  async execute({ name, full_name, email, address, document, password, is_admin, }: ICreateUsersDTO): Promise<void> {

    const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    const userDocumentAlreadyExist = await this.usersRepository.findByDocument(document);

    if (userEmailAlreadyExists || userDocumentAlreadyExist) {
      throw new AppError("Usuário já existe em nossa base")
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      full_name,
      address,
      document,
      email,
      password: passwordHash,
      is_admin
    })
  }
}

export { CreateUserUseCase }