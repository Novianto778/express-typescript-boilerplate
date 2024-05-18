import express, { Router } from 'express';

import { AuthController } from './auth.controller';

export const authRouter: Router = (() => {
  const router = express.Router();
  router.post('/login', AuthController.login);

  return router;
})();
