import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.css"]
})
export class ProfileEditComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSubject.subscribe(user => (this.user = user));
  }
}
