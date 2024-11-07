import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilCPageRoutingModule } from './perfil-c-routing.module';

import { PerfilCPage } from './perfil-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilCPageRoutingModule
  ],
  declarations: [PerfilCPage]
})
export class PerfilCPageModule {}
