import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { LoggedUser } from "src/app/models/loggedUser.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.css"]
})
export class ProfileEditComponent implements OnInit {
  @ViewChild("editProfileForm", { static: false }) editProfileForm: NgForm;
  loggedUser: LoggedUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loggedUserSubject.subscribe(loggedUser => {
      this.loggedUser = loggedUser;

      console.log("form", this.editProfileForm);
      this.editProfileForm.setValue({
        username: this.loggedUser.username,
        email: this.loggedUser.email,
        password: this.loggedUser.password
      });
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const values = form.value;
  }
}
