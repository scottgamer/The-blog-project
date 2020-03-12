import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("is authenticated", this.isAuthenticated);
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log("is authenticated", this.isAuthenticated);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
    this.navigateToHomePage();
  }

  private navigateToHomePage() {
    this.router.navigate(["/"]);
  }
}
