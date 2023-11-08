import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PropertieModel } from '../models/propertie/propertie.model';

@Injectable({
  providedIn: 'root'
})
export class PropertieService {

  constructor() { }

  async getPropertie(): Promise<PropertieModel[]> {
    const pb = new PocketBase(environment.baseApiUrl);
    const records: PropertieModel[] = await pb.collection('Propertie').getFullList({
      sort: '-created',
    });
    return records;
  }

}
