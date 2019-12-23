import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private getAccountDetailsUrl = "https://jsonplaceholder.typicode.com/todos/1";
  constructor( private _http: HttpClient) { }

  getAccountDetails() {
    var response = this._http.get(this.getAccountDetailsUrl);
    return response;
  }
}
