import { asyncWrapper } from '@/utils/asyncWrapper';
import { handleServiceResponse } from '@/utils/httpHandlers';

import { loginService } from './services/login.service';

export const AuthController = {
  login: asyncWrapper(async (req, res) => {
    const { email, password } = req.body;
    const serviceResponse = await loginService(email, password, res);

    handleServiceResponse(serviceResponse, res);
  }),
};
