import { Component, OnInit } from '@angular/core';
import { GetHotelsService } from '../../../services/get-hotels.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {

  public viewHotelData = [];
  public hotelId: number;
  constructor(private _router: Router, private _getHotelsService: GetHotelsService, private _activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    // let hotelId = this._activatedRoute.queryParams.subscribe['id'];
    this._activatedRoute.queryParams.subscribe(params => {
      this.hotelId = params['id'];
    });
    this._getHotelsService.viewHotel(this.hotelId).subscribe(
      (data) => {
        this.viewHotelData = Array.from(Object.keys(data), k => data[k]);
      });
  }
  backClicked() {
    const queryParams = {};
    queryParams['id'] = this.hotelId;
    this._router.navigate(['/get-hotels'], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

}
