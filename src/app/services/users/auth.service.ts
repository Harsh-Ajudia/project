import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public createUserUrl = "http://localhost:3000/users/signup"; 
  constructor(private _httpClient: HttpClient) { }

  createUser(formData: any){
    const authData: AuthData = {
      first_name : formData.first_name,
      last_name : formData.last_name,
      email : formData.email,
      password: formData.password 
    };
    
      this._httpClient.post(this.createUserUrl, authData)
    .subscribe(response => {
      console.log(response);
    });
  }
}
