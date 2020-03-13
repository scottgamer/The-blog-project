import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { ILogin } from "../interfaces/loginInterface";
import { LoggedUser } from "../models/loggedUser.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userSubject = new BehaviorSubject<User>(null);
  loggedUserSubject = new BehaviorSubject<LoggedUser>(null);

  constructor(private httpClient: HttpClient) {}

  getUser() {
    const userData: ILogin = JSON.parse(localStorage.getItem("userData"));

    return this.httpClient.get<LoggedUser>(
      `${environment.API_URL}/users/${userData.userId}`,
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${userData.token}` })
      }
    );
  }

  getAllUsers() {
    return this.httpClient.get<LoggedUser>(`${environment.API_URL}/users`);
  }

  editUser(user: LoggedUser) {
    this.loggedUserSubject.next(user);
  }
}
