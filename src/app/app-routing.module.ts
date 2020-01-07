import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imported for routes
import { AppComponent } from './app.component';
import { GetHotelsComponent } from './component/hotels/get-hotels/get-hotels.component';
import { ViewHotelComponent } from './component/hotels/view-hotel/view-hotel.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { GetUsersComponent } from './component/users/get-users/get-users.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'get-hotels', component: GetHotelsComponent },
  { path: 'hotels/view', component: ViewHotelComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'users/get-users', component: GetUsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }