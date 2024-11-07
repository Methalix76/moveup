import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  async ngOnInit() {
    //veremos si no estamos en un celular
    if(!Capacitor.isNativePlatform()){

      const firebaseConfig = {
        apiKey: "AIzaSyDv6MMTulAP-WZXOF8_RwcHbpiXqHx56lk",
        authDomain: "tellevo-e8825.firebaseapp.com",
        projectId: "tellevo-e8825",
        storageBucket: "tellevo-e8825.firebasestorage.app",
        messagingSenderId: "675912225037",
        appId: "1:675912225037:web:46aa6f379594a240a6a044",
        measurementId: "G-62FCWXZRR7"
      };
      
      initializeApp(firebaseConfig)
      console.log('Firebase web initialized');
    }
  }
}
