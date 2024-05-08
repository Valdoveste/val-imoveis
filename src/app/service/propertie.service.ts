import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PropertieModel } from '../models/propertie.model';
import { Observable, from } from 'rxjs';

const pb = new PocketBase(process.env?.['POCKETBASE_URL']);

@Injectable({
  providedIn: 'root'
})
export class PropertieService {

  constructor() { }

  async getAllPropertie(): Promise<PropertieModel[]> {
    const recordsProperties: PropertieModel[] = await pb.collection('Propertie').getFullList({
      sort: '-created',
    });

    return recordsProperties;
  }

  getPropertie(propertieID: string): Observable<PropertieModel> {
    const promise: Promise<PropertieModel> = pb.collection('Propertie').getOne(propertieID);

    return from(promise);
  }
}
