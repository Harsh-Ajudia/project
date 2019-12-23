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
import { GetDetailsComponent } from './component/bank-account/get-details/get-details.component';
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'get-hotels', component: GetHotelsComponent },
  { path: 'hotels/view/:id', component: ViewHotelComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'bank-account/get-details', component: GetDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }