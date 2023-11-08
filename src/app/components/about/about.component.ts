import PocketBase from 'pocketbase';
import { Component, OnInit, inject } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience.service';
import { environment } from 'src/environments/environment';

const pb = new PocketBase(environment.baseApiUrl);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  experiences!: any;
  fileExperience!: any;
  ExperienceService = inject(ExperienceService);

  private async getExperience() {
    try {
      this.experiences = await this.ExperienceService.getAllExperience();
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    this.getExperience();
  }

}
