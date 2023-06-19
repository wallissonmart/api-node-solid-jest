import { Game } from './Game';

test('should have id different from undefined', () => {
  const game = new Game('John');

  expect(game.id).toBeDefined();
});
