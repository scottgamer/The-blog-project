import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogItemComponent } from "./components/blog-list/blog-item/blog-item.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ModalComponent } from "./components/modal/modal.component";
import { ProfileEditComponent } from "./components/profile/profile-edit/profile-edit.component";

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
    ProfileEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
