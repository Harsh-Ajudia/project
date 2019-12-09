import { Component, OnInit } from '@angular/core';
import { GetCitiesService } from '../../services/get-cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public citiesData = [];
  constructor(private _citiesService: GetCitiesService) { }

  ngOnInit() {
    this._citiesService.getData().subscribe((data) => {
      this.citiesData = Array.from(Object.keys(data), k => data[k]);
      console.log(this.citiesData);
    });
  }

}
