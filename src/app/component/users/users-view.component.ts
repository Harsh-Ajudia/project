import { Component, OnInit } from '@angular/core';
import { ViewUserService } from '../../services/view-user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  public viewUserData = [];
  constructor(private viewUserService: ViewUserService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let userId = this._activatedRoute.snapshot.params['id'];

    this.viewUserService.getUser(userId).subscribe(
      (data) => {
        this.viewUserData = Array.from(Object.keys(data), k => data[k]);
      });
  }

}
