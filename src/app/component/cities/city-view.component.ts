import { Component, OnInit } from '@angular/core';
import { ViewCityService } from '../../services/view-city.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {
  public viewCityData = [];
  constructor(private viewCityService: ViewCityService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let cityId = this._activatedRoute.snapshot.params['id'];
    this.viewCityService.getUser(cityId).subscribe(
      (data) => {
        this.viewCityData = Array.from(Object.keys(data), k => data[k]);
      });
  }

}
