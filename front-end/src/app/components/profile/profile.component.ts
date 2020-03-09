import { Component, OnInit } from "@angular/core";

import { User } from "../../models/user.model";
import { UserService } from "src/app/services/user.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showModal = false;
  user: User;

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onUpdateProfile() {
    this.showModal = true;
    this.modalService.setStatus(this.showModal);

    this.user = new User("scottgamer", "richosojason@msn.com", "1234");
    this.userService.editUser(this.user);
  }
}
