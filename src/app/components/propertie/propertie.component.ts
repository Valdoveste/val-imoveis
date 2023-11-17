import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

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
      imovel: '',
      status_imovel: '',
      desc_imovel_simple: '',
      desc_imovel_completa: '',
      numero_andar: 0,
      endereco: '',
      endereco_numero: 0,
      endereco_bairro: '',
      endereco_cidade: '',
      endereco_estado: '',
      endereco_cep: '',
      valor_venda_imovel: 0,
      qtd_dormitorio: 0,
      valor_aluguel: 0,
      valor_condominio: 0,
      valor_iptu: 0,
      qtd_banheiro: 0,
      numero_metragem: 0,
      qtd_vagas: 0,
      aceita_pet: false,
      aceita_fgts: false,
      aceita_financimento: false,
      e_mobiliado: false,
      e_prox_metro: false,
      foto_principal: '',
      fotos: [],
      caracteristicas: []
    };

  ngOnInit(): void {
    this.getPropertie();
  }

  scroll(route: string) {
    this.router.navigate([route]).then((e) => {
      document.getElementById(route)!.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    })

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
      document.getElementById('image-slider-container')!.scrollLeft = (event.clientX);
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
