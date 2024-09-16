import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import { userResponseDto } from '@/common/user/user.dto';
import { UserModel } from '@/common/user/user.model';
import { AppError } from '@/models/error.model';
import { ResponseStatus, ServiceResponse } from '@/models/serviceResponse';
import { withErrorHandling } from '@/utils/errorHandling';

import { LoginModel } from '../auth.model';
import { getUserByEmail } from '../repositories/login.repository';

export const loginService = withErrorHandling(async (req: Request) => {
  const { email, password } = req.body;

  const loginData = new LoginModel(email, password).getLoginData();

  // logic

  const user = await getUserByEmail(loginData.email);

  if (!user) {
    throw new AppError('Invalid credentials', 400, StatusCodes.BAD_REQUEST);
  }

  const isPasswordValid = true;

  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', 400, StatusCodes.BAD_REQUEST);
  }

  const userData = new UserModel({ ...user });
  const userDto = userResponseDto(userData);

  const response = new ServiceResponse({
    status: ResponseStatus.Success,
    data: userDto,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
  });

  return response;
});
