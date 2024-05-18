import { NextFunction, Request, RequestHandler, Response } from 'express';

export function asyncWrapper(routeHandler: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routeHandler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
