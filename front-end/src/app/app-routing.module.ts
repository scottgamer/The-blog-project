import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/blogs", pathMatch: "full" },
  { path: "blogs", component: BlogListComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
