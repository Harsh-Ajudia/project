import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private apiurl = "http://localhost:3000/user";
  private viewurl = "http://localhost:3000/user";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
  getUser() {
    return this.http.get(this.viewurl);
  }
}
