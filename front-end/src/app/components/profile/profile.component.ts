import { Component, OnInit } from "@angular/core";

import { User } from "../../models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showModal = false;
  user: User;

  constructor() {}

  ngOnInit(): void {}

  onUpdateProfile() {
    this.showModal = !this.showModal;
    this.user = new User("scottgamer", "richosojason@msn.com", "1234");
  }
}
