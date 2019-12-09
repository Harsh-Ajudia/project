import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewUserService {
  public id = 1;
  private apiurl = "http://localhost:3000/user/view/";
  constructor(private http: HttpClient) { }

  getUser(empId) {
    return this.http.get(this.apiurl + empId);
  }
}
