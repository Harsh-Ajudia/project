import { Component, OnInit } from '@angular/core';
import { UsersSchema, GetUsersService } from '../../../services/users/get-users.service';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  public usersData = [];
  constructor(private _getUsersService: GetUsersService) {
    this.getUsers();
  }

  ngOnInit() {

  }
  getUsers() {
    this._getUsersService.getUsers().subscribe(res => {
      //this.usersData = res;
    });
  }
}
