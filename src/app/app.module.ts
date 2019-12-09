import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

/* Custom imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { UsersViewComponent } from './component/users/users-view.component';
import { CityViewComponent } from './component/cities/city-view.component';
import { CitiesComponent } from './component/cities/cities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateCitiesComponent } from './component/create-cities/create-cities.component';
import { CityListComponent } from './component/city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    CityViewComponent,
    CitiesComponent,
    CreateCitiesComponent,
    CityListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    UsersViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
