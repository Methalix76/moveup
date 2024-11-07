import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'passchange',
    loadChildren: () => import('./passchange/passchange.module').then( m => m.PasschangePageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: '',
    redirectTo: 'conductor',
    pathMatch: 'full'
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil-c',
    loadChildren: () => import('./perfil-c/perfil-c.module').then( m => m.PerfilCPageModule)
  },
  {
    path: 'perfil-p',
    loadChildren: () => import('./perfil-p/perfil-p.module').then( m => m.PerfilPPageModule)
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./crearviaje/crearviaje.module').then( m => m.CrearviajePageModule)
  },
  {
    path: 'encurso',
    loadChildren: () => import('./encurso/encurso.module').then( m => m.EncursoPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'solicitarviaje',
    loadChildren: () => import('./solicitarviaje/solicitarviaje.module').then( m => m.SolicitarviajePageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



