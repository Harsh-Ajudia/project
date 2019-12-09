import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {
  private apiurl = "http://api.openweathermap.org/data/2.5/weather?appid=12b13a05c61ba7a4fad8d4f2751bbad7&id=London";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
}
