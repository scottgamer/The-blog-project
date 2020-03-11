import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const value = form.value;
    const { username, password } = value;

    this.isLoading = true;
    this.authService.logIn(username, password).subscribe(
      response => {
        this.isLoading = false;
        this.navigateToProfile();
      },
      error => {
        this.error = error.error.message[0].value;
        this.isLoading = false;
      }
    );
  }

  private navigateToProfile() {
    this.router.navigate(["/profile"]);
  }
}
