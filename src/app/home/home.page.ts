// Eliminar las propiedades y métodos relacionados con el login
import { Component, inject } from '@angular/core';
import { AlertController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';
import { FirestoreService } from '../servicios/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

interface UserData {
  nombre: string;
  usuario: string;
  tipoUsuario: string;
  pass: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter, ViewWillEnter {

  usuario: string = '';
  pass: string = '';

  navController = inject(NavController);
  loginSrv = inject(LoginService);
  firestoreService = inject(FirestoreService);
  firestore = inject(AngularFirestore);
  alertController = inject(AlertController);

  constructor() {}

  ionViewWillEnter(): void {}

  async ionViewDidEnter() {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar() {
    const userRef = this.firestore.collection('usuarios', ref => ref.where('usuario', '==', this.usuario).where('pass', '==', this.pass));
    const userSnapshot = await lastValueFrom(userRef.get());

    if (userSnapshot && userSnapshot.docs.length > 0) {
      const userData = userSnapshot.docs[0].data() as UserData;
      if (userData.tipoUsuario === 'conductor') {
        this.navController.navigateForward('/conductor', { queryParams: { nombre: this.usuario } });
      } else if (userData.tipoUsuario === 'pasajero') {
        this.navController.navigateForward('/pasajero', { queryParams: { nombre: this.usuario } });
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  goToLogin() {
    this.navController.navigateForward('/login'); 
  }

  irARegistro() {
    this.navController.navigateForward('/registro');
  }

  goToPassChange() {
    this.navController.navigateForward('/passchange');
  }
}

