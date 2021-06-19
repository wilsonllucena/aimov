import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../shared/errors/AppError";
interface IPayload {
  sub: string;
}
export async function  ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("Token missing")
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub : user_id } = verify(token, "17bbe754d6d696c802d05c6f121e64a0") as IPayload;

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);

    if(!user){
      throw new AppError("User does not exists")
    }

    request.user  = {
      id: user_id,
      is_creator: user.is_creator
    }
 
    
    next();
  }catch{
    throw new AppError("Invalid token")
  }


}