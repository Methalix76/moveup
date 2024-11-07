import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // -----------modif relacionada a vinculo a perfil-c  --->
import { AngularFireAuth } from '@angular/fire/compat/auth'; // -----------modif relacionada a vinculo a perfil-c  --->

@Component({
  selector: 'app-perfil-c',
  templateUrl: './perfil-c.page.html',
  styleUrls: ['./perfil-c.page.scss'],
})
export class PerfilCPage implements OnInit {
  nombre: string = ''; // -----------modif relacionada a vinculo a perfil-c  --->
  usuario: string = ''; // -----------modif relacionada a vinculo a perfil-c  --->

  constructor(
    private afAuth: AngularFireAuth, // -----------modif relacionada a vinculo a perfil-c  --->
    private firestore: AngularFirestore // -----------modif relacionada a vinculo a perfil-c  --->
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => { // -----------modif relacionada a vinculo a perfil-c  --->
      if (user) {
        this.firestore.collection('usuarios').doc(user.uid).valueChanges().subscribe((userData: any) => { // -----------modif relacionada a vinculo a perfil-c  --->
          if (userData.tipoUsuario === 'conductor') { // -----------modif relacionada a vinculo a perfil-c  --->
            this.nombre = userData.nombre; // -----------modif relacionada a vinculo a perfil-c  --->
            this.usuario = userData.usuario; // -----------modif relacionada a vinculo a perfil-c  --->
          }
        });
      }
    });
  }
}
