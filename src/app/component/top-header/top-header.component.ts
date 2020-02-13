import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/users/auth.service';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  constructor(private _authService : AuthService) { }

  ngOnInit() {
    const tk = this._authService.getToken();
    console.log(tk);
  }
}
