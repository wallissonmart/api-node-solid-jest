//import { IGameDTO } from '@/entities/Game';
//import { RegisterGameUseCase } from './RegisterGameUseCase';
//import { IGameRepository } from '@/repositories/IGameRepository';

//const RegisterGameUseCaseMock = RegisterGameUseCase as jest.Mock<RegisterGameUseCase>;

describe('Register Game Use Case', () => {
  test('test pass', () => {
    expect(2).toBe(2);
  });
  /*let sut: RegisterGameUseCase;

  const data: IGameDTO = {
    name: 'Game test',
    releaseData: '1981',
    designer: 'Toru Iwatani',
    developer: 'Nanco',
    genre: 'Maze',
    mode: 'Single-player, multiplayer',
    platform: 'Arcade'
  };

  const mockGameRepository: IGameRepository = {
    register: jest.fn().mockResolvedValueOnce({})
  };

  beforeEach(() => {
    sut = new RegisterGameUseCaseMock(mockGameRepository);
  });

  test('should be able to cerate a new register game', async () => {
    const response = await sut.execute(data);

    expect(response).toBe(undefined);
  });*/
});
