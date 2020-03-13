import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit {
  showModal = false;
  loggedUser: User;
  @Input() user: User | any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.loggedUser = user;
      console.log("logged user", this.loggedUser);
    });
  }

  onOpenDeleteUserModal() {
    this.showModal = true;
    this.modalService.setStatus(this.showModal);
  }

  onDeleteConfirm(id: string) {
    if (this.isSameId(id)) {
      return alert("Can not delete your own account!");
    }
    this.userService
      .deleteUser(id)
      .subscribe(response => console.log(response));
  }

  private isSameId(id: string) {
    return this.loggedUser.userId === id;
  }
}
