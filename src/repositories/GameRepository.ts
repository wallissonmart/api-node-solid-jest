import prisma from '../../prisma/prismaClient';
import { IGameRepository } from './IGameRepository';
import { Game, IGameDTO } from '@src/entities/Game';

class GameRepository implements IGameRepository {
  async register({
    releaseData,
    designer,
    developer,
    genre,
    mode,
    name,
    platform,
  }: IGameDTO): Promise<Game> {
    const game = await prisma.game.create({
      data: {
        releaseData,
        designer,
        developer,
        genre,
        mode,
        name,
        platform,
      },
    });

    return game;
  }
}

export { GameRepository };
