import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  viajeForm: FormGroup;

  fbuilder = inject(FormBuilder);
  navController = inject(NavController);
  firestore = inject(AngularFirestore);

  constructor() {
    this.viajeForm = this.fbuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  ngOnInit() {}

  nuevoViaje() {
    if (this.viajeForm.valid) {
      const viajeData = {
        ...this.viajeForm.value,
        estado: 'en curso' // Estado inicial del viaje
      };
      this.firestore.collection('viajes').add(viajeData).then(docRef => {
        console.log('Viaje creado:', viajeData);
        this.navController.navigateForward('/encurso', {
          queryParams: { id: docRef.id }
        });
      }).catch(error => {
        console.error('Error al crear el viaje:', error);
      });
    }
  }
}
