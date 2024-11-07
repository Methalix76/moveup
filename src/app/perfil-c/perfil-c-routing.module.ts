import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilCPage } from './perfil-c.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCPageRoutingModule {}
