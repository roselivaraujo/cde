import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public ngFireAuth: AngularFireAuth,
  ) { }

  ngOnInit() {

  }

}
