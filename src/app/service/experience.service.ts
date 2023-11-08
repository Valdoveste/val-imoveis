import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  // async getPropertie(): Promise<PropertieModel[]> {
  //   const pb = new PocketBase(environment.baseApiUrl);
  //   const records: PropertieModel[] = await pb.collection('Propertie').getFullList({
  //     sort: '-created',
  //   });
  //   return records;
  // }
}
