import { Component, OnInit, inject } from '@angular/core';
import { flatMap } from 'rxjs';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties!: any;
  showNoPropertiesHeader: boolean = false;

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
    if (event.length != 0) {
      this.properties = event;
      this.showNoPropertiesHeader = false;
    } else {
      this.properties = [];
      this.showNoPropertiesHeader = true;
    }
  }

  toUpperFirstLetter(src: string) {
    let firstLetter: string = src.slice(0, 1).toUpperCase();
    let wihtOutFirstLetter: string = src.slice(1, src.length);

    return (firstLetter += wihtOutFirstLetter)
  }
}
