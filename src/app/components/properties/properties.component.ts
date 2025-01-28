import { Component, OnInit, inject } from '@angular/core';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties!: any;

  PropertieService = inject(PropertieService);

  private async getPropertie() {
    try {
      this.properties = await this.PropertieService.getAllPropertie();

    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    this.getPropertie();
  }

  updateProperties(event: any) {
    this.properties = event;
  }

  toUpperFirstLetter(src: string) {
    let firstLetter: string = src.slice(0, 1).toUpperCase();
    let wihtOutFirstLetter: string = src.slice(1, src.length);

    return (firstLetter += wihtOutFirstLetter)
  }
}
