import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private userData = new BehaviorSubject<any>(null);

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.firestore.collection('usuarios').doc(user.uid).valueChanges().subscribe(userData => {
          this.userData.next(userData);
        });
      }
    });
  }

  
  getUserData() {
    return this.userData.asObservable();
  }
}