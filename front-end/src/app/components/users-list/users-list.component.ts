import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.userService.getAllUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
