import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitarviaje',
  templateUrl: './solicitarviaje.page.html',
  styleUrls: ['./solicitarviaje.page.scss'],
})
export class SolicitarviajePage implements OnInit {
  viajeForm : FormGroup;

  
  fbuilder= inject(FormBuilder);
  navController = inject(NavController);
  firestore = inject(AngularFirestore);
  
  constructor() {
    this.viajeForm = this.fbuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required]
    });
   }
  ngOnInit() {
  }


  enviarSolicitud() {
    if (this.viajeForm.valid) {
      const solicitudData = {...this.viajeForm.value,estado: 'pendiente'};
      this.firestore.collection('solicitudes').add(solicitudData).then(() => {
        console.log('Solicitud enviada:', solicitudData);
        this.navController.navigateBack('/pasajero');
      }).catch(error => {
        console.error('Error al enviar la solicitud:', error);
      });
    }
  }
}
