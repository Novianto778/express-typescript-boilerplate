import { z } from 'zod';

export enum ResponseStatus {
  Success,
  Failed,
}

export enum Status {
  Error = 'error',
  ValidationError = 'validation-error',
}

export type IServiceResponse<T> = {
  status: ResponseStatus;
  message: string | string[];
  data: T;
  statusCode: number;
};

export class ServiceResponse<T = null> {
  success: boolean;
  message: string | string[];
  data: T;
  statusCode: number;

  constructor({ status, message, data, statusCode }: IServiceResponse<T>) {
    this.success = status === ResponseStatus.Success;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

export const ServiceResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    message: z.string(),
    data: dataSchema.optional(),
    statusCode: z.number(),
  });
