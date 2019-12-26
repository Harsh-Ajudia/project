import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private addContact = "http://localhost:3000/contact/add-contact";
  constructor(private _http: HttpClient) { }

  add(form: any) {
    var response = this._http.post(this.addContact, form);
    return response;
  }
}
