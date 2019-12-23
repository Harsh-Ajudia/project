import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/bank-account/get-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  public accountData = [];
  constructor(private _getDataService: GetDataService) { }

  ngOnInit() {
    this._getDataService.getAccountDetails().subscribe(
      (data) => {
        this.accountData = Array.from(Object.keys(data), k => data[k]);
      });
  }

}
