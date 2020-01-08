import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  public getUserUrl = "http://localhost:3000/users";
  constructor(private _httpClient: HttpClient) { }

  getUsers() {
    let promise = new Promise((resolve, reject) => {
      this._httpClient.get(this.getUserUrl)
          .toPromise()
          .then(
            res => {
              let response = res;
              resolve();
            },
            msg => {
              reject(msg);
            }
          )
    });
    return promise;
  }
}
/* export class UsersSchema {
  public id: number;
  public full_name: string;
  public email: string;
} */
