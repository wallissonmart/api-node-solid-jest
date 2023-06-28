import { RegisterGameController } from '@/useCases/registerGame/RegisterGameController';
import { registerValidator } from '@/useCases/registerGame/validator';
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
