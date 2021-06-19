import { AppError } from "@shared/errors/AppError";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { UsersReposistoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



let usersReposistoryInMemory: UsersReposistoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

beforeAll(() => {
  usersReposistoryInMemory = new UsersReposistoryInMemory();
  authenticateUserUseCase = new AuthenticateUserUseCase(usersReposistoryInMemory);
  // Esse cara teve que se instanciado porque pela regra eu preciso ter usuario criado para depois autenticar com mesmo 
  createUserUseCase = new CreateUserUseCase(usersReposistoryInMemory);
})

describe("Autheticate User", () => {
  it("should be able authenticate an user", async () => {
    const user: ICreateUsersDTO = {
      name: "Wilson",
      email: "email@usuario.com",
      password: "123456",
    }

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty("token")
  })

  it("should not be able to authenticate an none existent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "email@test.com",
        password: "123564"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should no be able to authenticate with incorret password", async () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        name: "Usuario",
        email: "usuario@email.com",
        password: "123456",
        driver_license: "000123"
      }
      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorretPassword",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})