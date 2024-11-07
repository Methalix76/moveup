import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarviajePage } from './solicitarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarviajePageRoutingModule {}
