import { FirebaseAuthState } from 'angularfire2';
import { AuthService } from './services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { ChallengeListComponent } from './components/challenge-list/challenge-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('challengeList') challengeListComponent: ChallengeListComponent;

  loggedInUser: FirebaseAuthState;

  constructor(authService: AuthService) {
    authService.initUser()
      .subscribe(auth => {
        this.loggedInUser = auth;
        this.challengeListComponent.initList();
      });
  }

  initChallengeList() {
    this.challengeListComponent.initList();
  }
}
