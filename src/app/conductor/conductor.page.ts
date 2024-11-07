import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../servicios/firestore.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  nombre: string = '';

  constructor(private navCtrl: NavController, private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getUserData().pipe(
      tap(userData => {
        if (userData) {
          this.nombre = userData.nombre || ''; // -----------get nombre  ---
          console.log('Nombre del usuario:', this.nombre); // -----------get nombre  ---
        } else {
          console.log('No se encontraron datos del usuario'); // -----------get nombre  ---
        }
      }, error => {
        console.error('Error al obtener datos del usuario:', error); // -----------get nombre  ---
      })
    ).subscribe();
  }
  crearViaje() {
    this.navCtrl.navigateForward('/crearviaje');
  }

  verViajes() {
    this.navCtrl.navigateForward('/viajes');
  }

  verSolicitudes() {
    this.navCtrl.navigateForward('/solicitudes');
  }
  goToProfile() {
    this.navCtrl.navigateForward('/perfil-c');
  }
}


