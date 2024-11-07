import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { LoginService } from '../login.service'; // Asegúrate de que la ruta sea correcta
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  usuario: string = '';
  pass: string = '';
  confirmPass: string = '';
  errorMessage: string = '';
  tipoUsuario: string = '';
  marcaVehiculo: string = '';
  modeloVehiculo: string = '';
  cantidadAsientos: number = 0;
  direccion: string = '';
  comuna: string = '';
  loading: boolean = false;
  mensaje: string = '';

  constructor(
    private navController: NavController, 
    private loginSrv: LoginService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private afAuth: AngularFireAuth
  ) {}

  onTipoUsuarioChange(event: any) {
    this.tipoUsuario = event.detail.value;
  }

  async registrar() {
    if (this.pass !== this.confirmPass) {
      this.errorMessage = 'Las contraseñas no coinciden'; 
      await this.showLoading(); 
      setTimeout(async () => { 
        await this.hideLoading(); 
        this.showAlert(this.errorMessage); 
      }, 1100);
      return;
    }

    await this.showLoading();
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.usuario, this.pass);
      const uid = userCredential.user?.uid; // Obtener UID de Firebase
      if (!uid) {
        throw new Error('UID no disponible');
      }
      const userData = {
        nombre: this.nombre,
        usuario: this.usuario,
        tipoUsuario: this.tipoUsuario,
        pass: this.pass,
        ...(this.tipoUsuario === 'conductor' && {
          marcaVehiculo: this.marcaVehiculo,
          modeloVehiculo: this.modeloVehiculo,
          cantidadAsientos: this.cantidadAsientos
        }),
        ...(this.tipoUsuario === 'pasajero' && {
          direccion: this.direccion,
          comuna: this.comuna
        })
      };

      await this.loginSrv.registrarUsuario(uid, userData); // Guardar datos adicionales en Firestore
      this.showSuccessAlert();
      this.navController.navigateForward('/home');
    } catch (error) {
      this.errorMessage = 'Error al registrar, Valide su email'; 
      this.showAlert(this.errorMessage); 
    } finally {
      await this.hideLoading();
    }
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor, espera...',
      duration: 1100
    });
    await loading.present();
  }

  async hideLoading() {
    await this.loadingController.dismiss();
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro',
      message: 'Exitoso',
      buttons: ['OK']
    });

    await alert.present();
  }
}
