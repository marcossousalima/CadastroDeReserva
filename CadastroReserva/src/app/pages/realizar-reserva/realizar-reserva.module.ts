import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarReservaPageRoutingModule } from './realizar-reserva-routing.module';
import { RealizarReservaPage } from './realizar-reserva.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarReservaPageRoutingModule,
    ComponentModule
  ],
  declarations: [RealizarReservaPage]
})
export class RealizarReservaPageModule { }
