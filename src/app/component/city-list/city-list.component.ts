import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  city;
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
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  editCity(){
    this._router.navigate(['/edit', this.city.id]);
  }
}
