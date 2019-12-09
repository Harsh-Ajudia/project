import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imported for routes
import { AppComponent } from './app.component';
import { CitiesComponent } from './component/cities/cities.component';
import { CityViewComponent } from './component/cities/city-view.component';
import { CreateCitiesComponent } from './component/create-cities/create-cities.component';
import { CityListComponent } from './component/city-list/city-list.component';
import { UsersComponent } from './component/users/users.component';
import { UsersViewComponent } from './component/users/users-view.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/view/:id', component: UsersViewComponent},
  {path: 'create-city', component: CreateCitiesComponent},
  {path: 'cities/users/:id', component: UsersComponent},
  {path: 'cities/view/:id', component: CityViewComponent},
  {path: 'cities/edit/:id', component: CreateCitiesComponent},
  {path: 'city-list', component: CityListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
