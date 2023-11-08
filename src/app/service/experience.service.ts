import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExperienceModel } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  async getAllExperience(): Promise<ExperienceModel[]> {
    const pb = new PocketBase(environment.baseApiUrl);
    const records: ExperienceModel[] = await pb.collection('Experience').getFullList({
      sort: '-created',
    });
    return records;
  }

}
