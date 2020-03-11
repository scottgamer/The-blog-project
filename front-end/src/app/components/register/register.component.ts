import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const value = form.value;
    const { username, email, password } = value;

    this.isLoading = true;
    this.authService.signUp(username, email, password).subscribe(
      response => {
        this.isLoading = false;
        this.navigateToLogin();
      },
      error => {
        this.error = error.error.message[0].value;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onClose() {
    this.error = null;
  }

  private navigateToLogin() {
    this.router.navigate(["/login"]);
  }
}
