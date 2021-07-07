import { container } from 'tsyringe';
import './providers';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IScoreRepository } from '@modules/scores/repositories/IScoreRepository';
import { ScoreRepository } from '@modules/scores/repositories/implementations/ScoreRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IScoreRepository>(
  "ScoreRepository",
  ScoreRepository
)





