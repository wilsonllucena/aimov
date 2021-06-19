import { container } from 'tsyringe';
import './providers';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)




