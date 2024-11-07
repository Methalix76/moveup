import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  solicitudes : Observable <any[]>= new Observable<any[]>();
  fireStore = inject (AngularFirestore)
  constructor() { }

  ngOnInit() {
    this.solicitudes = this.fireStore.collection('solicitudes', ref => ref.where('estado', '==', 'pendiente')).valueChanges({ idField: 'id' });
  }

  aceptarSolicitud(id: string) {
    this.fireStore.collection('solicitudes').doc(id).update({ estado: 'aceptada' }).then(() => {
      console.log('Solicitud aceptada:', id);
    }).catch(error => {
      console.error('Error al aceptar la solicitud:', error);
    });
  }


}
