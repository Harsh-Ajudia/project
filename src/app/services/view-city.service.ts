import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { cities } from 'cities.json/cities.json';
@Injectable({
  providedIn: 'root'
})
export class ViewCityService {
  private apiurl = "http://api.openweathermap.org/data/2.5/weather?appid=12b13a05c61ba7a4fad8d4f2751bbad7&q=";

  constructor(private http: HttpClient) { }

  getUser(cityId) {
    return this.http.get(this.apiurl + cityId);
  }
}
