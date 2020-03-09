import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogItemComponent } from "./blog-list/blog-item/blog-item.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
