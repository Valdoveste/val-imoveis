import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { GeocodingModel } from '../models/geocoding';

const GEOCODING_URL: String = environment.GEOCODING_URL;
const GEOCODING_API_KEY: String = environment.GEOCODING_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class GeocodingApiService {

  constructor(private http: HttpClient) { }

  getLocationLatLng(streetOutput: String): Observable<GeocodingModel> {
    return this.http.get<GeocodingModel>(
      GEOCODING_URL + "address=" + streetOutput + "&key=" + GEOCODING_API_KEY
    )
  }
}
