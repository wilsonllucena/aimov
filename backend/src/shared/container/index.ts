import { container } from 'tsyringe';
import './providers';

import { SchedulesRepository } from '@modules/schedules/repositories/implementations/SchedulesRepository';
import { ISchedulesRepository } from '@modules/schedules/repositories/ISchedulesRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { SubscribersRepository } from '@modules/subscribers/repositories/implementations/SubscribersRepository';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { ISubscribersRepository } from '@modules/subscribers/repositories/ISubscribersRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ISchedulesRepository>(
  "SchedulesRepository",
  SchedulesRepository
)

container.registerSingleton<ISubscribersRepository>(
  "SubscribersRepository",
  SubscribersRepository
)



