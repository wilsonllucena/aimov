import { container } from 'tsyringe';
import './providers';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IScoreRepository } from '@modules/scores/repositories/IScoreRepository';
import { ScoreRepository } from '@modules/scores/repositories/implementations/ScoreRepository';
import { IProprietarioRepository } from '@modules/imoveis/repositories/IProprietarioRepository';
import { ProprietarioRepository } from '@modules/imoveis/repositories/implementations/ProprietarioRepository';
import { IImovelRepository } from '@modules/imoveis/repositories/IImovelRepository';
import { ImovelRepository } from '@modules/imoveis/repositories/implementations/ImovelRepository';
import ITipoAutorizacaoRepository from '@modules/imoveis/repositories/ITipoAutorizacaoRepository';
import TipoAutorizacaoRepository from '@modules/imoveis/repositories/implementations/TipoAutorizacaoRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IScoreRepository>(
  "ScoreRepository",
  ScoreRepository
)

container.registerSingleton<IProprietarioRepository>(
    "ProprietarioRepository",
    ProprietarioRepository
)

container.registerSingleton<IImovelRepository>(
    "ImovelRepository",
    ImovelRepository
)

container.registerSingleton<ITipoAutorizacaoRepository>(
    "TipoAutorizacaoRepository",
    TipoAutorizacaoRepository
)





