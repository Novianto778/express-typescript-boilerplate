import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export class LoginModel {
  private email;
  private password;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;

    this.validate();
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getLoginData() {
    return {
      email: this.email,
      password: this.password,
    };
  }

  private validate() {
    loginSchema.parse(this);
  }
}
