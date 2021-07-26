import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../shared/errors/AppError";
interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing")
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, `${process.env.APP_KEY_PRIVATE}`) as IPayload;

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists")
    }

    request.user = {
      id: user_id,
      is_admin: user.is_admin ?? false,
      active: user.active ?? false
    }


    next();
  } catch {
    throw new AppError("Invalid token")
  }


}