import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PropertieModel } from '../models/propertie.model';
import { Observable, from } from 'rxjs';

const pb = new PocketBase(environment.POCKETBASE_URL);

@Injectable({
  providedIn: 'root'
})
export class PropertieService {

  constructor() { }

  async getPropertieBySearchParameters(searchParameters: string | undefined): Promise<PropertieModel[]> {
    const recordsProperties: PropertieModel[] = await pb.collection('Propertie').getFullList({
      filter: searchParameters,
    });

    return recordsProperties;
  }

  async getAllPropertie(): Promise<PropertieModel[]> {
    const recordsProperties: PropertieModel[] = await pb.collection('Propertie').getFullList({
      sort: '-created',
    });

    return recordsProperties;
  }

  getPropertieByID(propertieID: string): Observable<PropertieModel> {
    const promise: Promise<PropertieModel> = pb.collection('Propertie').getOne(propertieID);

    return from(promise);
  }

}
