import { ICreateScoreDTO } from "../dtos/ICreateScoreDTO";
import Score from "../entities/Score";

interface IScoreRepository{
  create(data: ICreateScoreDTO): Promise<Score | void>
  findById(id: string): Promise<Score | undefined>
  findByTitle(title: string): Promise<Score | undefined>
  list(): Promise<Score[]>;
  save(score: Score): Promise<Score>;
}

export { IScoreRepository, ICreateScoreDTO }