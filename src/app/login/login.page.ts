import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

interface UserData {
  nombre: string;
  usuario: string;
  tipoUsuario: string;
  pass: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  pass: string = '';

  navController = inject(NavController);
  firestore = inject(AngularFirestore);
  alertController = inject(AlertController);

  constructor() { }

  ngOnInit() {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar() {
    // <----------------------modifica boton ingresar---|Aqui modifique cambio de pag para logear ----|>
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

  irARegistro() {
    this.navController.navigateForward('/registro');
  }

  goToPassChange() {
    this.navController.navigateForward('/passchange');
  }
}
