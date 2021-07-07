import Score from "@modules/scores/entities/Score";
import { IScoreRepository } from "@modules/scores/repositories/IScoreRepository";
import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

@injectable()
class ListScoresUseCase {
  constructor(
    @inject("ScoreRepository")
    private scoreRepository: IScoreRepository
  ) { }

  async execute(): Promise<Score[]> {
    const scores = this.scoreRepository.list();
    return classToClass(scores);
  }
}

export { ListScoresUseCase };