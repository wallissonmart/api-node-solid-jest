import { GameRepository } from '@src/repositories/GameRepository';
import { IGameRepository } from '@src/repositories/IGameRepository';
import { container } from 'tsyringe';

container.registerSingleton<IGameRepository>('GameRepository', GameRepository);
