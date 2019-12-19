import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private getHotelsApiUrl = "http://localhost:3000/hotels";
  constructor( private _http: HttpClient) { }

  add() {
    return this._http.get(this.getHotelsApiUrl);
  }
}
