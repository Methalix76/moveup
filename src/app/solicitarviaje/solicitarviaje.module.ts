import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SolicitarviajePageRoutingModule } from './solicitarviaje-routing.module';
import { SolicitarviajePage } from './solicitarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SolicitarviajePageRoutingModule
  ],
  declarations: [SolicitarviajePage]
})
export class SolicitarviajePageModule {}
