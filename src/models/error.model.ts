import { StatusCodes } from 'http-status-codes';
import { ZodIssue } from 'zod';

export class AuthenticationError extends Error {
  private status;
  private statusCodes: StatusCodes;
  constructor(
    message = 'You must be authenticated to do this action',
    status = 401,
    statusCodes = StatusCodes.UNAUTHORIZED
  ) {
    super(message);
    this.status = status;
    this.statusCodes = statusCodes;
  }

  getStatus() {
    return this.status;
  }

  getErrors() {
    return this.message;
  }

  getStatusCodes() {
    return this.statusCodes;
  }
}

export class ValidationError extends Error {
  private errors: ZodIssue[];

  constructor(errors: ZodIssue[]) {
    super('An validation error occured');
    this.errors = errors;
  }

  getErrors() {
    return this.errors.map((error) => {
      return {
        path: error.path.join('.'),
        message: error.message,
      };
    });
  }
}

export class AppError extends Error {
  private status;
  private statusCodes: StatusCodes;
  constructor(message = 'An error occured', status = 500, statusCodes = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.status = status;
    this.statusCodes = statusCodes;
  }

  getStatus() {
    return this.status;
  }

  getErrors() {
    return this.message;
  }

  getStatusCodes() {
    return this.statusCodes;
  }
}
