import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetHotelsService {

  private getHotelsApiUrl = "http://localhost:3000/hotels";
  private viewHotelApiUrl = "http://localhost:3000/hotels/view/";
  private searchHotelApiUrl = "http://localhost:3000/hotels?";
  private getDataApiUrl = "http://localhost:3000/hotels/get-searchdata/";

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(this.getHotelsApiUrl);
  }
  viewHotel(hotelId: number) {
    return this._http.get(this.viewHotelApiUrl + hotelId);
  }
  searchHotels(searchString: string) {
    return this._http.get(this.searchHotelApiUrl + searchString);
  }
  getSearchData() {
    return this._http.get(this.getDataApiUrl);
  }
}