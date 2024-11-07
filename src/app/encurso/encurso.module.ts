import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncursoPageRoutingModule } from './encurso-routing.module';

import { EncursoPage } from './encurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncursoPageRoutingModule
  ],
  declarations: [EncursoPage]
})
export class EncursoPageModule {}
