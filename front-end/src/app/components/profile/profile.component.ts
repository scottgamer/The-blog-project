import { Component, OnInit } from "@angular/core";

import { LoggedUser } from "../../models/loggedUser.model";
import { UserService } from "src/app/services/user.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showModal = false;
  loggedUser: LoggedUser;

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.loggedUser = new LoggedUser(
        user.username,
        user.email,
        user.password
      );
    });
  }

  onUpdateProfile() {
    this.showModal = true;
    this.modalService.setStatus(this.showModal);
    this.userService.editUser(this.loggedUser);
  }
}
