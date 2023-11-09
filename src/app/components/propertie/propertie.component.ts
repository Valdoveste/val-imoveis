import { Component, OnInit, inject } from '@angular/core';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-propertie',
  templateUrl: './propertie.component.html',
  styleUrls: ['./propertie.component.scss']
})
export class PropertieComponent implements OnInit {
  properties!: any;

  PropertieService = inject(PropertieService);

  private async getPropertie() {
    try {
      this.properties = await this.PropertieService.getPropertie();

    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    this.getPropertie();
  }

}
