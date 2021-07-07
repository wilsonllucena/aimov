import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICreateScoreDTO, IScoreRepository } from "@modules/scores/repositories/IScoreRepository";

@injectable()
class CreateScoreUseCase {
  constructor(
    @inject("ScoreRepository")
    private scoreRepository: IScoreRepository
  ) { }

  async execute({ title, description, value }: ICreateScoreDTO): Promise<void> {

    // const scoreAlreadyExists = await this.scoreRepository.find({where: title});

    // if (scoreAlreadyExists) {
    //   throw new AppError("Pontuação já esta cadastrada")
    // }
    await this.scoreRepository.create({
      title,
      description,
      value
    })
  }
}

export { CreateScoreUseCase }