import PocketBase from 'pocketbase'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ExperienceModel } from '../models/experience.model';

const pb = new PocketBase(environment.POCKETBASE_URL);
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  async getAllExperience(): Promise<ExperienceModel[]> {
    const experienceRecords: ExperienceModel[] = await pb.collection('Experience').getFullList({
      sort: '-created',
    });
    return experienceRecords;
  }
}