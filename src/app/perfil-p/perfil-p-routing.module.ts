import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPPage } from './perfil-p.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPPageRoutingModule {}
