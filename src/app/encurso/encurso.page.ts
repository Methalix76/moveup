import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-encurso',
  templateUrl: './encurso.page.html',
  styleUrls: ['./encurso.page.scss'],
})
export class EncursoPage implements OnInit {

  viaje: any;
  viajeId: string = '';


  route = inject(ActivatedRoute);
  fireStore= inject (AngularFirestore);
  navController = inject(NavController);

  constructor() {

    this.route.queryParams.subscribe(params => {
      console.log('Parámetros de consulta:', params);
      if (params && params['id']) {
        this.viajeId = params['id'];
        console.log('ID del viaje:', this.viajeId);
        this.fireStore.collection('viajes').doc(this.viajeId).valueChanges().subscribe(viaje => {
          this.viaje = viaje;
          console.log('Datos del viaje:', this.viaje);
        }, error => {
          console.error('Error al obtener el viaje:', error);
        });
      } else {
        console.error('No se recibió el ID del viaje en los parámetros de consulta.');
      }
    });
   }

  ngOnInit() {
  }


  finalizar() {
    this.fireStore.collection('viajes').doc(this.viajeId).update({ estado: 'terminado' }).then(() => {
      console.log('Viaje terminado:', this.viaje);
      this.navController.navigateBack('/viajes');
    }).catch(error => {
      console.error('Error al terminar el viaje:', error);
    });
  }
}
