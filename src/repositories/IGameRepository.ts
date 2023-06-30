import { Game, IGameDTO } from '@src/entities/Game';

interface IGameRepository {
  register(game: IGameDTO): Promise<Game>;
}

export { IGameRepository };
