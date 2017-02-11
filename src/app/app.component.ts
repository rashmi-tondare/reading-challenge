import { FirebaseAuthState } from 'angularfire2';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedInUser: FirebaseAuthState;

  constructor(authService: AuthService) {
    authService.initUser()
      .subscribe(auth => {
        this.loggedInUser = auth;
      });
  }
}
