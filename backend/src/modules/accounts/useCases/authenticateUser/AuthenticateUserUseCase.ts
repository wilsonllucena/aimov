import { compare } from 'bcrypt';
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken';
import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import 'dotenv/config';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    username: string;
  },
  token: string
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByDocument(username);

    if (!user) {
      throw new AppError("Usuário ou senha incorreto", 401)
    }
    //comparando a senha passada pelo usuário com a senha cadastrada no banco
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou senha incorreto", 401)
    }

    // Gerando o token com jsonwebtoken
    const token = sign({}, `${process.env.APP_SECRET}`, {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        username: user.document,
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }