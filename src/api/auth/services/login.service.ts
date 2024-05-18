import { StatusCodes } from 'http-status-codes';

import { ResponseStatus, ServiceResponse } from '@/models/serviceResponse';
import { withErrorHandling } from '@/utils/errorHandling';

import { LoginModel } from '../auth.model';
import { authRepository } from '../repositories/login.repository';

export const loginService = withErrorHandling(async (email: string, password: string) => {
  const loginData = new LoginModel(email, password).getLoginData();

  // logic
  const login = await authRepository(loginData.email, loginData.password);

  if (!login) {
    throw new Error('Invalid credentials');
  }

  const response = new ServiceResponse({
    status: ResponseStatus.Success,
    data: login,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
  });

  return response;
});
