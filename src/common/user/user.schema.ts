import { z } from 'zod';

export const userSchema = z.object({
  user_id: z.string(),
  email: z.string(),
  name: z.string(),
});

export const createUserSchema = z.object({
  user_id: z.string().optional(),
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
});
