import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarReservaPageRoutingModule } from './realizar-reserva-routing.module';
import { RealizarReservaPage } from './realizar-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarReservaPageRoutingModule
  ],
  declarations: [RealizarReservaPage]
})
export class RealizarReservaPageModule { }
