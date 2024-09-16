import { createUserSchema } from './user.schema';
import { CreateUserDto } from './user.types';

export class UserModel {
  private user_id?: string;
  private email: string;
  private name: string;
  private password: string;

  constructor({ user_id, email, name, password }: CreateUserDto) {
    this.user_id = user_id;
    this.email = email;
    this.name = name;
    this.password = password;

    this.validate();
  }

  getUserID() {
    return this.user_id;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getPassword() {
    return this.password;
  }

  private validate() {
    return createUserSchema.parse(this);
  }
}
