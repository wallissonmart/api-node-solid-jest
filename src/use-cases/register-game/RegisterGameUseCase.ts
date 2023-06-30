import { Game, IGameDTO } from '@src/entities/Game';
import { IGameRepository } from '@src/repositories/IGameRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class RegisterGameUseCase {
  constructor(
    @inject('GameRepository')
    private readonly gameRepository: IGameRepository
  ) {}

  async execute({
    releaseData,
    designer,
    developer,
    genre,
    mode,
    name,
    platform,
  }: IGameDTO): Promise<Game> {
    const game = await this.gameRepository.register({
      releaseData,
      designer,
      developer,
      genre,
      mode,
      name,
      platform,
    });

    return game;
  }
}

export { RegisterGameUseCase };
