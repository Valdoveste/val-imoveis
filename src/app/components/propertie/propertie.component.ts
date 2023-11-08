import { Component, OnInit, inject } from '@angular/core';
import { RecordModel } from 'pocketbase';
import { PropertieModel } from 'src/app/models/propertie/propertie.model';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-propertie',
  templateUrl: './propertie.component.html',
  styleUrls: ['./propertie.component.scss']
})
export class PropertieComponent implements OnInit {
  records!: any;

  PropertieService = inject(PropertieService);

  private async getPropertie() {
    try {
      this.records = await this.PropertieService.getPropertie();

    } catch (error) {

    }
  }

  ngOnInit(): void {
    this.getPropertie();
  }

}
