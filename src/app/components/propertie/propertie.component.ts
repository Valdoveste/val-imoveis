import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { PropertieModel } from 'src/app/models/propertie.model';
import { PropertieService } from 'src/app/service/propertie.service';
import { Loader } from '@googlemaps/js-api-loader';
import { GeocodingApiService } from 'src/app/service/geocoding-api.service';
import { environment } from 'src/environments/environment.development';
import { GeocodingModel } from 'src/app/models/geocoding';
import { Title, Meta } from '@angular/platform-browser';
// import PocketBase from 'pocketbase';

@Component({
  selector: 'app-propertie',
  templateUrl: './propertie.component.html',
  styleUrls: ['./propertie.component.scss']
})
export class PropertieComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private geoCodingService: GeocodingApiService,
    private titleService: Title,
    private metadataService: Meta
  ) { }

  // pb = new PocketBase(environment.POCKETBASE_URL);

  PropertieService = inject(PropertieService);

  loader = new Loader({
    apiKey: environment.MAPSJS_API_KEY,
    version: "weekly"
  });

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

  whatsAppText = ``;

  ngOnInit() { this.getPropertie(); }

  // WhatsApp Msg Sender 

  sentWhatsAppMsg() {
    window.open(
      (
        'https://wa.me/+5511966551264?text=' +
        this.replaceSpacesInString(
          [this.whatsAppText + window.location.href], '%20'
        )
      ), "_blank"
    )
  }

  // Google Maps

  private getGeocoding(streetOutput: String) {
    this.geoCodingService.getLocationLatLng(streetOutput).subscribe({
      next: (response: GeocodingModel) => {
        this.loadGoogelMaps(
          response.results[0].geometry.location.lat,
          response.results[0].geometry.location.lng
        )
      },
      error: (err) => console.log(err)
    })
  }

  private collectStreetFromPropetie(propertie: PropertieModel) {

    let streetOutput = this.replaceSpacesInString(
      [
        propertie.endereco + ", " +
        propertie.endereco_numero.toString() + " - " +
        propertie.endereco_bairro + ", " +
        propertie.endereco_cidade + " - " +
        propertie.endereco_estado + "," +
        propertie.endereco_cep
      ], '+');

    this.getGeocoding(streetOutput);
  }

  marker!: google.maps.marker.AdvancedMarkerElement;

  private loadGoogelMaps(lat: number, lng: number) {
    const locationCords = { lat: lat, lng: lng }

    const mapOptions = {
      center: locationCords,
      zoom: 18,
    }

    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

      let map = new Map(document.getElementById("map") as HTMLElement, mapOptions);

      new google.maps.Marker({
        position: locationCords,
        map,
        title:
          this.toUpperFirstLetter(this.properties.imovel)
          + " - " +
          this.properties.endereco_bairro
      });

    });
  }

  private joinsTheStreetStrings(street_str: String[]): String | string {
    let joined_street_str = "";

    street_str.forEach(ele => (joined_street_str += ele));

    return joined_street_str;
  }

  private replaceSpacesInString(street_str: String[], replaceTo: string): String {
    let joined_street_str = this.joinsTheStreetStrings(street_str);

    return joined_street_str.replaceAll(' ', replaceTo);
  }

  // Propetie info

  public getRouteID() {
    let id!: string | null;
    this.activeRoute.paramMap.subscribe({
      next: (params) => id = params.get('id')
    })

    return id;
  }

  // private async setMetadataForPropertie(propertie: PropertieModel) {

  //   const record = await this.pb.collection('Propertie').getOne(propertie.id);

  //   this.titleService.setTitle((propertie.imovel + " - " + propertie.endereco_bairro));

  //   this.metadataService.updateTag({ name: 'title', content: (propertie.imovel + " - " + propertie.endereco_bairro) });

  //   this.metadataService.updateTag({ name: 'description', content: propertie.desc_imovel_completa });
  //   this.metadataService.updateTag({ name: 'description', content: propertie.desc_imovel_simple });
  //   this.metadataService.updateTag({ name: 'url', content: window.location.href });
  //   this.metadataService.updateTag({ name: 'image', content: (environment.POCKETBASE_URL + "/api/files/" + propertie.collectionId + "/" + propertie.id + "/" + record['foto_principal']) });

  //   this.metadataService.updateTag({ name: 'og:title', content: (propertie.imovel + " - " + propertie.endereco_bairro) });
  //   this.metadataService.updateTag({ name: 'og:image', content: (environment.POCKETBASE_URL + "/api/files/" + propertie.collectionId + "/" + propertie.id + "/" + record['foto_principal']) });
  //   this.metadataService.updateTag({ name: 'og:url', content: window.location.href });
  //   this.metadataService.updateTag({ name: 'og:description', content: propertie.desc_imovel_simple });

  //   this.metadataService.updateTag({ name: 'twitter:title', content: (propertie.imovel + " - " + propertie.endereco_bairro) });
  //   this.metadataService.updateTag({ name: 'twitter:image', content: (environment.POCKETBASE_URL + "/api/files/" + propertie.collectionId + "/" + propertie.id + "/" + record['foto_principal']) });
  //   this.metadataService.updateTag({ name: 'twitter:url', content: window.location.href });
  //   this.metadataService.updateTag({ name: 'twitter:description', content: propertie.desc_imovel_completa });
  // }

  private getPropertie() {
    const collectionID = this.getRouteID();

    if (collectionID) {
      this.PropertieService.getPropertieByID(collectionID)
        .subscribe({
          next: (response: PropertieModel) => {
            this.properties = response;

            this.collectStreetFromPropetie(this.properties);

            // this.setMetadataForPropertie(this.properties);

            this.whatsAppText
              = `Olá Val, tudo bem? Gostaria de obter mais informações referente ao ${this.properties.imovel} - ${this.properties.endereco_bairro}. Estaria disponível para conversarmos? 
              `
          },
          error: (err) => { console.log(err) }
        });
    }
  }

  // Image Slider

  isMouseDown: boolean = false;

  isMouseInSlider: boolean = false;

  public mouseMoveListener(event: MouseEvent) {
    if (this.isMouseDown == true) {
      document.getElementById('image-slider-container')!.scrollLeft = (event.clientX);
    }
  }

  public mouseInSlider(event: MouseEvent) {
    const targetElement: EventTarget | null = event.target;

    if (targetElement instanceof Element
      && targetElement.id == 'image-slider-container') {
      this.isMouseInSlider = true;
    } else {
      this.isMouseInSlider = false;
    }
  }

  public toUpperFirstLetter(src: string) {
    let firstLetter: string = src.slice(0, 1).toUpperCase();
    let wihtOutFirstLetter: string = src.slice(1, src.length);

    return (firstLetter += wihtOutFirstLetter)
  }

  public scroll(router: string) {
    this.router.navigate([router]).then((e) => {
      document.getElementById(router)!.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    })
  }
}
