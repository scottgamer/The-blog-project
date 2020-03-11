import { ILogin } from "../interfaces/loginInterface";

export class User implements ILogin {
  constructor(
    public userId: string,
    public token: string,
    public expiration: number
  ) {}

  getToken() {
    if (!this.expiration || new Date().getTime() > this.expiration) {
      return null;
    }
    return this.token;
  }
}
