import { IGameDTO } from '@/entities/Game';
import { IGameRepository } from '@/repositories/IGameRepository';
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
  }: IGameDTO): Promise<void> {
    await this.gameRepository.register({
      releaseData,
      designer,
      developer,
      genre,
      mode,
      name,
      platform,
    });
  }
}

export { RegisterGameUseCase };
