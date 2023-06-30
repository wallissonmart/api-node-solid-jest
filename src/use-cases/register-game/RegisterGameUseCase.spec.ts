import { RegisterGameUseCase } from './RegisterGameUseCase';
import { IGameRepository } from '@src/repositories/IGameRepository';
import { IGameDTO } from '@src/entities/Game';

const RegisterGameUseCaseMock =
  RegisterGameUseCase as jest.Mock<RegisterGameUseCase>;

describe('Register Game Use Case', () => {
  let sut: RegisterGameUseCase;

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  const data: IGameDTO = {
    name: 'Game test',
    releaseData: '1981',
    designer: 'Toru Iwatani',
    developer: 'Nanco',
    genre: 'Maze',
    mode: 'Single-player, multiplayer',
    platform: 'Arcade',
  };

  const mockGameRepository: IGameRepository = {
    register: jest.fn().mockImplementation((gameData) => {
      return Promise.resolve({
        id: generateRandomNumber(),
        ...gameData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }),
  };

  beforeEach(() => {
    sut = new RegisterGameUseCaseMock(mockGameRepository);
  });

  test('should be able to create a new register game', async () => {
    const response = await sut.execute(data);
    console.log(response);
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });
});
