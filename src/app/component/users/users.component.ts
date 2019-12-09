import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersData = [];
  
  constructor(private getUserService: GetUsersService) { }

  ngOnInit() {
    this.getUserService.getData().subscribe((data) => {
      this.usersData = Array.from(Object.keys(data), k => data[k]);
    });
  }
}