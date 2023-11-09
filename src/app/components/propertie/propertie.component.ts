import { Component, OnInit, inject } from '@angular/core';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-propertie',
  templateUrl: './propertie.component.html',
  styleUrls: ['./propertie.component.scss']
})
export class PropertieComponent implements OnInit {
  properties!: any;

  images = ['https://www.achoumudou.com.br/fotos/354018_1.jpg', 'https://www.achoumudou.com.br/fotos/860372_1.jpg', 'https://www.achoumudou.com.br/fotos/1757179_1.jpg'];

  PropertieService = inject(PropertieService);

  ngOnInit(): void {

  }
}
