import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  viajes: Observable<any[]>;


  fireStore = inject (AngularFirestore);

  constructor() { 
    this.viajes = this.fireStore.collection('viajes').valueChanges();
  }

  ngOnInit() {
    
  }

}
