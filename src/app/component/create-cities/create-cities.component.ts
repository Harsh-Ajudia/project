import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { City } from '../../models/city.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AddCityService } from '../../services/add-city.service';
@Component({
  selector: 'app-create-cities',
  templateUrl: './create-cities.component.html',
  styleUrls: ['./create-cities.component.css']
})
export class CreateCitiesComponent implements OnInit {
  cityData = [];
  cities: City[] = [
    {
      id: 1,
      name: 'Mumbai',
      country: 'India',
    }, 
    {
      id: 2,
      name: 'Rome',
      country: 'Italy',
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
    }
  ];
  city: City;
  constructor(private _cityService: AddCityService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getCity(id);
    });
  }
  getCity(id: number) {
    if (id === 0) {
      this.city = {
        id: null,
        name: null,
        country: null
      };
    } else {
      //this.city = this._cityService.getCity(id);
    }
  }
  save(city: City) {
    this.cities.push(city);
  }
  saveCity(cityForm: NgForm): void {
    const newCity: City = Object.assign({}, this.city);
    //this._cityService.save(newCity);
    this.cities.push(newCity);
    //this.cityForm.reset();
    this._router.navigate(['city-list']);
  }

}
