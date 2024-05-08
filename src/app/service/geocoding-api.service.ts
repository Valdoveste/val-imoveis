import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const GEOCODING_URL: String = environment.GEOCODING_URL;
const GEOCODING_API_KEY: String = environment.GEOCODING_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class GeocodingApiService {

  constructor(private http: HttpClient) { }

  getLocationLatLng(streetOutput: String) {
    return this.http.get(
      GEOCODING_URL + "address=" + streetOutput + "&key=" + GEOCODING_API_KEY
    )
  }
}

