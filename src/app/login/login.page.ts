import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() { }

  //Método para verificar 'Authentication' no firebase
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((userRes) => {
        /* Salvando os dados do usuario em localstorage quando
         valido e configurando como null quando invalido */
        if (userRes.user) {
          this.authService.userData = userRes.user;
          localStorage.setItem('user', JSON.stringify(this.authService.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
        if (this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);
        } else {
          window.alert('E-mail não cadastrado')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}