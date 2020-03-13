import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogItemComponent } from "./components/blog-list/blog-item/blog-item.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ModalComponent } from "./components/modal/modal.component";
import { ProfileEditComponent } from "./components/profile/profile-edit/profile-edit.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserItemComponent } from './components/users-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogItemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ModalComponent,
    ProfileEditComponent,
    AdminComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    UsersListComponent,
    UserItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
