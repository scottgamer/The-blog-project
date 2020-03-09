import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/models/user.model";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.css"]
})
export class ProfileEditComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit(): void {}
}
