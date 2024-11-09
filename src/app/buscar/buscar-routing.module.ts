import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPage } from './buscar.page';
import { HomePage } from '../home/home.page';
import { MapaPage } from '../mapa/mapa.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  },

  {
    path: 'home',
    component: HomePage
  },

  {
    path: 'mapa',
    component: MapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPageRoutingModule {}
