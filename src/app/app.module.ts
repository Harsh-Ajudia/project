import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetHotelsComponent } from './component/hotels/get-hotels/get-hotels.component';
import { ViewHotelComponent } from './component/hotels/view-hotel/view-hotel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TopHeaderComponent } from './component/top-header/top-header.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { AlertComponent } from './component/alert/alert.component';
import { GetUsersComponent } from './component/users/get-users/get-users.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { PostCreateComponent } from './component/posts/post-create/post-create.component';
import { PostListComponent } from './component/posts/post-list/post-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetHotelsComponent,
    ViewHotelComponent,
    TopHeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    HomeComponentComponent,
    AlertComponent,
    GetUsersComponent,
    LoginComponent,
    SignUpComponent,
    PostCreateComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
