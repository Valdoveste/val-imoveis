import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PropertieModel } from 'src/app/models/propertie.model';
import { PropertieService } from 'src/app/service/propertie.service';

@Component({
  selector: 'app-propertie',
  templateUrl: './propertie.component.html',
  styleUrls: ['./propertie.component.scss']
})
export class PropertieComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  PropertieService = inject(PropertieService);

  isMouseDown: boolean = false;

  isMouseInSlider: boolean = false;

  properties: PropertieModel =
    {
      id: '',
      collectionId: '',
      collectionName: '',
      created: '',
      updated: '',
      nome: '',
      status: '',
      desc_anuncio: '',
      desc: '',
      endereco: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      numero: 0,
      valor: 0,
      dormitorio: 0,
      aluguel: 0,
      condominio: 0,
      iptu: 0,
      banheiro: 0,
      metragem: 0,
      vagas: 0,
      andar: 0,
      pet: false,
      mobiliado: false,
      prox_metro: false,
      foto_principal: '',
      fotos: [],
    };

  ngOnInit(): void {
    this.getPropertie();
  }

  public getRouteID() {
    let id!: string | null;
    this.activeRoute.paramMap.subscribe({
      next: (params) => id = params.get('id')
    })

    return id;
  }

  private getPropertie() {
    const collectionID = this.getRouteID();

    if (collectionID) {
      try {
        this.PropertieService.getPropertie(collectionID).subscribe({
          next: (response) => {
            this.properties = response;
          },
          error: (err: HttpErrorResponse) => console.log(err)
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  mouseMoveListener(event: MouseEvent) {
    if (this.isMouseDown == true) {
      document.getElementById('image-slider-container')!.scrollLeft = (event.clientX) * 2.5;
    }
  }

  mouseInSlider(event: MouseEvent) {
    const targetElement: EventTarget | null = event.target;

    if (targetElement instanceof Element
      && targetElement.id == 'image-slider-container') {
      this.isMouseInSlider = true;
    } else {
      this.isMouseInSlider = false;
    }
  }

}
