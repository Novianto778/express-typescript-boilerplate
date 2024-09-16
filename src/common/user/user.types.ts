import { z } from 'zod';

import { createUserSchema, userSchema } from './user.schema';

export type CreateUserDto = z.infer<typeof createUserSchema>;

export type UserResponseDto = z.infer<typeof userSchema>;
