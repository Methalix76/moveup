import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // <----------------------modificacion para ver el tipo de perfil--->
import { AngularFireAuth } from '@angular/fire/compat/auth'; // <----------------------modificacion para ver el tipo de perfil--->

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = ''; // <----------------------modificacion para ver el tipo de perfil--->
  usuario: string = ''; // <----------------------modificacion para ver el tipo de perfil--->
  tipoUsuario: string = ''; // <----------------------modificacion para ver el tipo de perfil--->

  constructor(
    private afAuth: AngularFireAuth, // <----------------------modificacion para ver el tipo de perfil--->
    private firestore: AngularFirestore // <----------------------modificacion para ver el tipo de perfil--->
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => { // <----------------------modificacion para ver el tipo de perfil--->
      if (user) {
        this.firestore.collection('usuarios').doc(user.uid).valueChanges().subscribe((userData: any) => { // <----------------------modificacion para ver el tipo de perfil--->
          this.nombre = userData.nombre; // <----------------------modificacion para ver el tipo de perfil--->
          this.usuario = userData.usuario; // <----------------------modificacion para ver el tipo de perfil--->
          this.tipoUsuario = userData.tipoUsuario; // <----------------------modificacion para ver el tipo de perfil--->
        });
      }
    });
  }
}

