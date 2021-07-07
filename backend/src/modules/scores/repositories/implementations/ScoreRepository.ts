import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import { IScoreRepository, ICreateScoreDTO } from "../IScoreRepository";
import Score from "@modules/scores/entities/Score";

@injectable()
class ScoreRepository implements IScoreRepository {

  private repository: Repository<Score>
  
  constructor() {
    this.repository = getRepository(Score)
  }

  list(): Promise<Score[]> {
    return this.repository.find();
  }

  async create({ title, description, value }: ICreateScoreDTO): Promise<Score | void> {
    const score = this.repository.create({ title, description, value });
    await this.repository.save(score);
  }

  public async save(score: Score): Promise<Score> {
    return this.repository.save(score);
  }

  async findById(id: string): Promise<Score | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByTitle(title: string): Promise<Score | undefined> {
    const score = await this.repository.findOne(title);
    return score;
  }
}

export { ScoreRepository }