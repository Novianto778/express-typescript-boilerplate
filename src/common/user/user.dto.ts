import { UserModel } from './user.model';
import { CreateUserDto, UserResponseDto } from './user.types';

export function createUserDto(user: UserModel): CreateUserDto {
  return {
    email: user.getEmail(),
    name: user.getName(),
    password: user.getPassword(),
  };
}

export function userResponseDto(user: UserModel): UserResponseDto {
  const userId = user.getUserID();
  if (!userId) throw new Error('User ID is not defined');
  return {
    user_id: userId,
    email: user.getEmail(),
    name: user.getName(),
  };
}
