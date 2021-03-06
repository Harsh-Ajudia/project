import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/users/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm){
    if(form.invalid){
      return;
    }

    this._authService.createUser(form.value);
  }
}
