import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarReservaPage } from './realizar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarReservaPageRoutingModule { }
