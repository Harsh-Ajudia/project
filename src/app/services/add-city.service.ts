import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class AddCityService {

  constructor() { }

  /*save(city: City) {
    if (city.id === null) {
      const maxId = this.city.reduce(function (e1, e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      city.id = maxId + 1;
  
      this.cities.push(city);
    } else {
      const foundIndex = this.city.findIndex(e => e.id === city.id);
      this.city[foundIndex] = city;
    }
  }*/
  getCity(id: number){
    //const foundIndex = this.city.findIndex(e => e.id === city.id);
    //return this.city[foundIndex];
  }
}
