import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs'; // <-------------------------------cambio pass-----

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.page.html',
  styleUrls: ['./passchange.page.scss'],
})
export class PasschangePage {
  usuario: string = ''; // <-------------------------------cambio pass-----
  newPass: string = ''; // <-------------------------------cambio pass-----
  confirmNewPass: string = ''; // <-------------------------------cambio pass-----

  constructor(
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private navController: NavController
  ) {}

  async resetPassword() {
    if (this.newPass !== this.confirmNewPass) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const userRef = this.firestore.collection('usuarios', ref => ref.where('usuario', '==', this.usuario)); // <-------------------------------cambio pass-----
    const userSnapshot = await lastValueFrom(userRef.get()); // <-------------------------------cambio pass-----

    if (userSnapshot && userSnapshot.docs.length > 0) {
      const userId = userSnapshot.docs[0].id;
      await this.firestore.collection('usuarios').doc(userId).update({ pass: this.newPass }); // <-------------------------------cambio pass-----

      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Contraseña restablecida correctamente',
        buttons: ['OK']
      });
      await successAlert.present();
      this.navController.navigateForward('/home');
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario no encontrado',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

