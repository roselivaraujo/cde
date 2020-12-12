import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase,AngularFireList,AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  id: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    /* Salvando dados do usuario em localstorage quando
     logado e setando como null quando deslogado */
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        // Se logado pega informaçoes do aluno
        this.getFicha(user.uid).valueChanges().subscribe(res => {
          this.id = res;
        });
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Login com email/senha
  SignIn(email, password) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  // Retorna 'true' quando o aluno está logado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Retorna 'true' quando o email no firebase está validada
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : true;
  }

  // Sair
  SignOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    })
  }
  
  // Pega os dados do aluno
  getFicha(id: string) {
    this.bookingRef = this.db.object('/cde/' + id);
    return this.bookingRef;
  }
  
}