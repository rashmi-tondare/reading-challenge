import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;

  emailPassword: string = 'email_password';
  facebook: string = 'facebook';
  google: string = 'google';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  signIn(method: string): void {
    switch(method) {
      case this.emailPassword:
        this.authService.signIn(this.email, this.password);
        break;
      case this.facebook:
        this.authService.facebookSignIn();
        break;
      case this.google:
        this.authService.googleSignIn();
        break;
    }
  }

}
