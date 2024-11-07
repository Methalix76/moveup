import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPPageRoutingModule } from './perfil-p-routing.module';

import { PerfilPPage } from './perfil-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPPageRoutingModule
  ],
  declarations: [PerfilPPage]
})
export class PerfilPPageModule {}
