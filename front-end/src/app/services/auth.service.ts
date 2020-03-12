import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../models/user.model";
import { ILogin } from "../interfaces/loginInterface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient) {}

  signUp(username: string, email: string, password: string) {
    return this.httpClient.post(`${environment.API_URL}/users/signUp`, {
      username,
      email,
      password
    });
  }

  logIn(username: string, password: string) {
    return this.httpClient
      .post(`${environment.API_URL}/users/login`, {
        username,
        password
      })
      .pipe(
        tap((response: ILogin) => {
          console.log(response);
          this.handleAuthentication(response);
        })
      );
  }

  logOut() {
    localStorage.removeItem("userData");
    this.user.next(null);
  }

  autoLogin() {
    const userData: ILogin = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.userId,
      userData.token,
      new Date().getTime() + userData.expiration
    );

    if (loadedUser.getToken()) {
      this.user.next(loadedUser);
      // TODO: implement auto-logout when time expires
    }
  }

  private handleAuthentication(data: ILogin) {
    const expirationDate = new Date().getTime() + data.expiration;
    const user = new User(data.userId, data.token, expirationDate);
    this.user.next(user);

    localStorage.setItem("userData", JSON.stringify(data));
  }
}
