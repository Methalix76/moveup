import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // <------------------modif relacionada a vinculo a perfil--->

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {
  constructor(private navCtrl: NavController) {} // <------------------modif relacionada a vinculo a perfil--->
  solicitarViaje() {
    this.navCtrl.navigateForward('/solicitarviaje');
  }

  viajeDispo() {
    this.navCtrl.navigateForward('/viajes');
  }

  verSolicitudes() {
    this.navCtrl.navigateForward('/solicitudes');
  }
  goToProfile() { // <------------------modif relacionada a vinculo a perfil--->
    this.navCtrl.navigateForward('/perfil'); // <------------------modif relacionada a vinculo a perfil--->
  }
}