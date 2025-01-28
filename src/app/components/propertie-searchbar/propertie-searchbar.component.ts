import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { PropertieService } from 'src/app/service/propertie.service';

interface DropdownList {
  PropertieType: string[];
  PropertieStatus: string[];
  PropertieCity: string[];
  PropertieFloor: number[];

  PropertieBathrooms: number[];
  PropertieDorms: number[];
  PropertieSpots: number[];
  PropertieSquareFootage: number[];

  PropertieFurniture: string[];
  PropertieFanancing: string[];
  PropertieFGTS: string[];
  PropertiePets: string[];
}

interface SelectedItem {
  PropertieType: string[];
  PropertieStatus: string[];
  PropertieCity: string[];
  PropertieFloor: number[];

  PropertieBathrooms: number[];
  PropertieDorms: number[];
  PropertieSpots: number[];
  PropertieSquareFootage: number[];

  PropertieFurniture: string[];
  PropertieFanancing: string[];
  PropertieFGTS: string[] | any;
  PropertiePets: string[] | any;
}

const dropdownSettings = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Selecionar todos',
  unSelectAllText: 'Limpar filtro',
  itemsShowLimit: 3,
  searchPlaceholderText: 'Buscar',
  allowSearchFilter: true
};

@Component({
  selector: 'app-propertie-searchbar',
  templateUrl: './propertie-searchbar.component.html',
  styleUrls: ['./propertie-searchbar.component.scss']
})
export class PropertieSearchbarComponent implements OnInit {

  PropertieService = inject(PropertieService);

  @Input() propertiesInfo!: any;

  @Output() eventSearchProperties = new EventEmitter<any>();

  dropdownMultSeletcSettings = dropdownSettings;

  dropdownSingleSeletcSettings: typeof dropdownSettings = {
    singleSelection: true,
    idField: '',
    textField: '',
    selectAllText: '',
    unSelectAllText: '',
    searchPlaceholderText: '',
    itemsShowLimit: 1,
    allowSearchFilter: false
  };

  perpertieInfo: any = {
    imovel: [],
    status_imovel: [],
    qtd_dormitorio: [],
    qtd_banheiro: [],
    numero_metragem: [],
    qtd_vagas: [],
    numero_andar: [],
    endereco_cidade: [],
    aceita_pet: [],
    aceita_fgts: [],
    aceita_financimento: [],
    e_mobiliado: [],
    e_prox_metro: []
  }

  dropdownLists: DropdownList = {
    PropertieType: [],
    PropertieStatus: [],
    PropertieCity: [],
    PropertieFloor: [],

    PropertieBathrooms: [],
    PropertieDorms: [],
    PropertieSpots: [],
    PropertieSquareFootage: [],

    PropertieFurniture: [],
    PropertieFanancing: [],
    PropertieFGTS: [],
    PropertiePets: []
  };

  seletectedItems: SelectedItem = {
    PropertieType: [],
    PropertieStatus: [],
    PropertieCity: [],
    PropertieFloor: [],

    PropertieBathrooms: [],
    PropertieDorms: [],
    PropertieSpots: [],
    PropertieSquareFootage: [],

    PropertieFurniture: [],
    PropertieFanancing: [],
    PropertieFGTS: [],
    PropertiePets: []
  };

  ngOnInit(): void {
    let checkForPropertiesInfo = setInterval(() => {
      if (this.propertiesInfo) {
        clearInterval(checkForPropertiesInfo);
        this.pushPropertiesInfoIntoSearchParametersArray(this.propertiesInfo);

        this.sortMultipleNumberArrays([
          this.perpertieInfo.qtd_vagas,
          this.perpertieInfo.numero_andar,
          this.perpertieInfo.qtd_banheiro,
          this.perpertieInfo.qtd_dormitorio,
          this.perpertieInfo.numero_metragem
        ]);

        this.sortMultipleStringArrays([
          this.perpertieInfo.imovel,
          this.perpertieInfo.status_imovel,
          this.perpertieInfo.endereco_cidade
        ]);

        this.removeDuplicateFromSortedNumberArray([
          this.perpertieInfo.imovel,
          this.perpertieInfo.qtd_vagas,
          this.perpertieInfo.numero_andar,
          this.perpertieInfo.qtd_banheiro,
          this.perpertieInfo.status_imovel,
          this.perpertieInfo.qtd_dormitorio,
          this.perpertieInfo.numero_metragem,
          this.perpertieInfo.endereco_cidade
        ]);

        this.setPropertiesInfoToDropdownLists()

      }
    }, 1000)
  }

  setPropertiesInfoToDropdownLists() {
    this.dropdownLists.PropertieType = this.perpertieInfo.imovel
    this.dropdownLists.PropertieSpots = this.perpertieInfo.qtd_vagas
    this.dropdownLists.PropertieBathrooms = this.perpertieInfo.qtd_banheiro
    this.dropdownLists.PropertieStatus = this.perpertieInfo.status_imovel
    this.dropdownLists.PropertieDorms = this.perpertieInfo.qtd_dormitorio
    this.dropdownLists.PropertieSquareFootage = this.perpertieInfo.numero_metragem
    this.dropdownLists.PropertieFloor = this.perpertieInfo.numero_andar
    this.dropdownLists.PropertieCity = this.perpertieInfo.endereco_cidade

    this.dropdownLists.PropertieFurniture = ['É mobilhado', 'Não é mobilhado']
    this.dropdownLists.PropertieFanancing = ['Aceita financiamento', 'Não aceita financiamento']
    this.dropdownLists.PropertieFGTS = ['Aceita FGTS', 'Não aceita FGTS']
    this.dropdownLists.PropertiePets = ['Aceita pets', 'Não aceita pets']
  }

  // Push (qtd_dormitorios,  qtd_banheiros, numero_metragens, qtd_vagas) from propertieInfo to perpertieInfo.
  private pushPropertiesInfoIntoSearchParametersArray(propertiesInfo: any) {
    const fields = [
      'qtd_dormitorio',
      'qtd_banheiro',
      'numero_metragem',
      'qtd_vagas',
      'imovel',
      'status_imovel',
      'numero_andar',
      'endereco_cidade'
    ];

    fields.forEach(field => {
      propertiesInfo.forEach((propertie: any) => {
        this.perpertieInfo[field].push(propertie[field]);
      });
    });

  }

  private sortMultipleNumberArrays(arr_nums: Array<number[]>) {
    arr_nums.forEach(arr_num => arr_num = arr_num.sort((a: any, b: any) => a - b));
  }

  private sortMultipleStringArrays(arr_strs: Array<string[]>) {
    arr_strs.forEach(arr_str => arr_str = arr_str.sort());
  }

  private removeDuplicateFromSortedNumberArray(arr_nums: any[][]) {
    arr_nums.forEach(arr_num => {

      if (arr_num.length === 0) return;

      let j = 1;

      for (let i = 1; i < arr_num.length; i++) {
        if (arr_num[i] !== arr_num[(i - 1)]) {
          arr_num[j] = arr_num[i];
          j++;
        }
      }

      arr_num.length = j;
    });

  }

  protected search() {
    if (
      !(this.seletectedItems.PropertieType.length == 0 &&
        this.seletectedItems.PropertieStatus.length == 0 &&
        this.seletectedItems.PropertieCity.length == 0 &&
        this.seletectedItems.PropertieFloor.length == 0 &&
        this.seletectedItems.PropertieBathrooms.length == 0 &&
        this.seletectedItems.PropertieDorms.length == 0 &&
        this.seletectedItems.PropertieSpots.length == 0 &&
        this.seletectedItems.PropertieSquareFootage.length == 0 &&
        this.seletectedItems.PropertieFurniture.length == 0 &&
        this.seletectedItems.PropertieFanancing.length == 0 &&
        this.seletectedItems.PropertieFGTS.length == 0 &&
        this.seletectedItems.PropertiePets.length == 0)
    ) {

      let str_formartSearcParameters: string | undefined =
        this.formartSearchParameters([
          ["imovel", this.seletectedItems.PropertieType],
          ["status_imovel", this.seletectedItems.PropertieStatus],
          ["endereco_cidade", this.seletectedItems.PropertieCity],
          ["numero_andar", this.seletectedItems.PropertieFloor],

          ["qtd_banheiro", this.seletectedItems.PropertieBathrooms],
          ["qtd_dormitorio", this.seletectedItems.PropertieDorms],
          ["qtd_vagas", this.seletectedItems.PropertieSpots],
          ["numero_metragem", this.seletectedItems.PropertieSquareFootage],

          ["e_mobiliado", this.seletectedItems.PropertieFurniture],
          ["aceita_financimento", this.seletectedItems.PropertieFanancing],
          ["aceita_fgts", this.seletectedItems.PropertieFGTS],
          ["aceita_pet", this.seletectedItems.PropertiePets],
        ]);

      this.getPropertiesBySearchParametes(str_formartSearcParameters);

    }
  }

  formartSearchParameters(num_params: [string, (boolean | string | number)[]][]): string {
    return num_params
      .filter(([, values]) => values.length > 0)
      .map(([key, values]) => {
        const conditions = values
          .map(value => {
            if (typeof value === 'string') {
              if (value.includes("Não é") || value.includes("Não aceita ")) {
                return `${key} = false`;
              } else if (value.includes("É ") || value.includes("Aceita ")) {
                return `${key} = true`;
              }

              return `${key} = "${value}"`;
            } else {
              return `${key} = ${value}`;
            }
          })
          .join(" || ");
        return `(${conditions})`;
      })
      .join(" && ");
  }

  private async getPropertiesBySearchParametes(searchParameters: string | undefined) {
    try {
      this.eventSearchProperties.emit(await this.PropertieService.getPropertieBySearchParameters(searchParameters));
    } catch (err) {
      console.log(err)
    }
  }
}
