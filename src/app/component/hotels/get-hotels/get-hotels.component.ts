import { Component, OnInit } from '@angular/core';
import { GetHotelsService } from '../../../services/get-hotels.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-hotels',
  templateUrl: './get-hotels.component.html',
  styleUrls: ['./get-hotels.component.css']
})
export class GetHotelsComponent implements OnInit {

  public viewHotelsData = [];
  public searchData = [];
  pageNumber: number = 1;
  searchString: string = '';
  sort: string = '';
  order: string = '';
  region_type: string = '';
  count: number = 0;
  constructor(private _getHotelsService: GetHotelsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let string: string = '';
    string = string.concat("searchterm=" + this.searchString);
    this._getHotelsService.searchHotels(string).subscribe(
      (data) => {
        this.viewHotelsData = Array.from(Object.keys(data), k => data[k]);
      });
      
      this._getHotelsService.getSearchData().subscribe(
        (data) => {
        this.searchData = Array.from(Object.keys(data), k => data[k]);
      });
      this.count = Object.keys(this.viewHotelsData).length;
  }
  search() {
    let string: string = '';
    string = string.concat("searchterm=" + this.searchString);
    string = string.concat("&sort=" + this.sort);
    string = string.concat("&order=" + this.order);
    string = string.concat("&region_type=" + this.region_type);
    console.log(string);
    this._getHotelsService.searchHotels(string).subscribe(
      (data) => {
        this.viewHotelsData = Array.from(Object.keys(data), k => data[k]);
      });
      this.pageNumber = 1;
      this.count = Object.keys(this.viewHotelsData).length;
  }

}
