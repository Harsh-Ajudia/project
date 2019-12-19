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
  constructor(private _getHotelsService: GetHotelsService, private _activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    let hotelId = this._activatedRoute.snapshot.params['id'];
    this._getHotelsService.viewHotel(hotelId).subscribe(
      (data) => {
        this.viewHotelData = Array.from(Object.keys(data), k => data[k]);
      });
  }
  backClicked() {
    this._location.back();
  }

}
