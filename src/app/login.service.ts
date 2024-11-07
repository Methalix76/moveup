import { Injectable } from '@angular/core';
import { FirebaseAuthentication, User } from '@capacitor-firebase/authentication';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importar AngularFirestore

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  nombreUsuario = '';
  usuarioActual = new BehaviorSubject<User | undefined>(undefined);

  //creamos un metodo que llamares cuando firebase efectivamente se haya cargado
  cargarFirebase!: () => void;

  //creamos una promesa que se resuelve cuando firebase se haya cargado
  firebaseCargado = new Promise<void>((resolve)=>{
    this.cargarFirebase = resolve;
  });

  constructor(
    private firestore: AngularFirestore // Inyectar AngularFirestore
  ) {
    // Dejamos un escucha al evento de cambio de estado de firebase
    //cuando firebase inicie la primera vez, este evento se llamará cuando este cargado
    FirebaseAuthentication.addListener('authStateChange', async (cambio)=>{
      this.usuarioActual.next(cambio.user!);
      this.nombreUsuario = cambio.user?.email?? '';
      //cuando llamemos este metodo, firebase ya estará cargado y el guard lo sabrá
      this.cargarFirebase();
    });
  }

  public get logeado(){
    if(this.usuarioActual.value){
      return true;
    }
    return false;
  }

  //propiedad del usuario actual
  public get usuario(){
    return this.usuarioActual.value;
  }

  public async login(user:string,password:string){
    const login = await FirebaseAuthentication.signInWithEmailAndPassword({
      email:user,
      password:password
    });
    this.usuarioActual.next(login.user!);
    this.nombreUsuario = login.user!.email!;
    console.log(login);
  }

  public async registrar(user: string, password: string): Promise<boolean> {
    try {
      const registro = await FirebaseAuthentication.createUserWithEmailAndPassword({
        email: user,
        password: password
      });
      this.usuarioActual.next(registro.user!);
      this.nombreUsuario = registro.user!.email!;
      console.log('Usuario registrado:', registro);
      return true;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }

  // Añadir el método registrarUsuario
  public async registrarUsuario(uid: string, userData: any): Promise<void> {
    try {
      await this.firestore.collection('usuarios').doc(uid).set(userData);
    } catch (error) {
      console.error('Error al guardar datos del usuario:', error);
      throw error;
    }
  }
}
