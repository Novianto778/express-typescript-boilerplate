import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AuthenticationError, ValidationError } from '@/models/error.model';
import { ResponseStatus, ServiceResponse } from '@/models/serviceResponse';
import { handleServiceResponse } from '@/utils/httpHandlers';

import { logger } from '../config/logger/index';

export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err, { message: err.message, url: req.originalUrl, method: req.method });

  if (err instanceof ValidationError) {
    const errorRes = new ServiceResponse({
      status: ResponseStatus.Failed,
      message: 'Invalid input',
      data: err.getErrors(),
      statusCode: StatusCodes.BAD_REQUEST,
    });

    handleServiceResponse(errorRes, res);
  } else if (err instanceof AuthenticationError) {
    const errorRes = new ServiceResponse({
      status: ResponseStatus.Failed,
      message: err.message || 'Unauthorized',
      data: err.getErrors(),
      statusCode: err.getStatus(),
    });

    handleServiceResponse(errorRes, res);
  } else {
    const errorRes = new ServiceResponse({
      status: ResponseStatus.Failed,
      message: err.message || 'Internal server error',
      data: null,
      statusCode: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    });

    handleServiceResponse(errorRes, res);
  }
  next(err);
};
