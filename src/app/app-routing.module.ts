import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertieComponent } from './components/propertie/propertie.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'imoveis',
    redirectTo: ''
  },
  {
    path: 'construtoras',
    redirectTo: ''
  },
  {
    path: 'contato',
    redirectTo: ''
  },
  {
    path: 'imovel-detalhes/: id',
    component: PropertieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
