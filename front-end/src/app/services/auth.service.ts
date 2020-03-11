import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signUp(username: string, email: string, password: string) {
    return this.httpClient.post(`${environment.API_URL}/users/signUp`, {
      username,
      email,
      password
    });
  }
}
