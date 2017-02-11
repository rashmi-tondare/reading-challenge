import { UtilityService } from './utility.service';
import { AuthConstants } from './../constants';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  loggedInUser: FirebaseAuthState

  constructor(private af: AngularFire,
    private utilityService: UtilityService) {
      this.initUser().subscribe(auth => {
        this.loggedInUser = auth;
      });
  }

  initUser(): AngularFireAuth {
    return this.af.auth;
  }

  signIn(email: string, password: string): void {
    this.af.auth.login(
      {
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then(a => {
        window.location.href = '/';
      })
      .catch(e => {
        console.error('failed', e);
        if (AuthConstants.USER_NOT_FOUND.localeCompare(e['code']) === 0) {
          this.signUp(email, password);
        }
        else {
          this.utilityService.displayErrorDialog(e.message);
        }
      });
  }

  signUp(email: string, password: string): void {
    this.af.auth.createUser({
      email: email,
      password: password
    })
      .then(a => {
        window.location.href = '/';
      })
      .catch(e => {
        this.utilityService.displayErrorDialog(e.message);
      })
  }

  facebookSignIn(): void {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    })
      .then(a => {
        window.location.href = '/';
      })
      .catch(e => {
        this.utilityService.displayErrorDialog(e.message);
      });
  }

  googleSignIn(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    })
      .then(a => {
        window.location.href = '/';
      })
      .catch(e => {
        this.utilityService.displayErrorDialog(e.message);
      });
  }

}
