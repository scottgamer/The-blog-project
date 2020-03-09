import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userSubject = new BehaviorSubject<User>(null);
  constructor() {}

  editUser(user: User) {
    this.userSubject.next(user);
  }
}
