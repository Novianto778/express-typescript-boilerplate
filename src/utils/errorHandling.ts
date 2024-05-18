import { ZodError } from 'zod';

import { AuthenticationError, ValidationError } from '@/models/error.model';
import { ServiceResponse } from '@/models/serviceResponse';

async function handleErrorsWithResponse<T>(operation: () => Promise<ServiceResponse<T>>): Promise<ServiceResponse<T>> {
  try {
    return await operation();
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError(error.errors);
    }
    if (error instanceof AuthenticationError) {
      throw new AuthenticationError(error.getErrors(), error.getStatus(), error.getStatusCodes());
    }
    throw error;
  }
}

export function withErrorHandling<T>(serviceFunction: (...args: any[]) => Promise<ServiceResponse<T>>) {
  return async function (...args: any[]): Promise<ServiceResponse<T>> {
    return await handleErrorsWithResponse(async () => {
      return await serviceFunction(...args);
    });
  };
}
