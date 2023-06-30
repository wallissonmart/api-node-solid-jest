import { RegisterGameController } from '@src/use-cases/register-game/RegisterGameController';
import { registerValidator } from '@src/use-cases/register-game/validator';
import { celebrate } from 'celebrate';
import { Router } from 'express';

const registerRoutes = Router();

const registerGameController = new RegisterGameController();

registerRoutes.post(
  '/',
  celebrate(registerValidator),
  registerGameController.handle
);

export { registerRoutes };
