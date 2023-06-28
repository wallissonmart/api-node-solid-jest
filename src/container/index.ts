import { container } from 'tsyringe';

import { GameRepository } from '../repositories/GameRepository';
import { IGameRepository } from '../repositories/IGameRepository';

container.registerSingleton<IGameRepository>('GameRepository', GameRepository);
