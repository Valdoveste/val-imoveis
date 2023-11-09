import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PropertieModel } from '../models/propertie.model';

const pb = new PocketBase(environment.POCKETBASE_URL);

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

  async getPropertie(recordID: string): Promise<PropertieModel> {
    const recordPropertie: PropertieModel = await pb.collection('Propertie').getOne(recordID);

    return recordPropertie;
  }
}
