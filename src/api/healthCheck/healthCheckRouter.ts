import express, { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseStatus, ServiceResponse } from '@/models/serviceResponse';
import { handleServiceResponse } from '@/utils/httpHandlers';

export const healthCheckRouter: Router = (() => {
  const router = express.Router();

  router.get('/', (_req: Request, res: Response) => {
    const serviceResponse = new ServiceResponse({
      status: ResponseStatus.Success,
      data: 'Health check successful',
      message: 'Health check successful',
      statusCode: StatusCodes.OK,
    });

    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
