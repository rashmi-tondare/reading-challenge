import { MdSnackBar } from '@angular/material';
import { AppService } from './../../services/app.service';
import { CompletedChallenge } from './../../models/completed-challenge.model';
import { AuthService } from './../../services/auth.service';
import { Challenge } from './../../models/challenge.model';
import { QueryConstants } from './../../constants';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent {

  items: Challenge[];

  constructor(private af: AngularFire,
    private authService: AuthService,
    private appService: AppService,
    private snackbar: MdSnackBar) { }

  public initList() {
    this.af.database.list(QueryConstants.LIST_CHALLENGES)
      .subscribe(challenges => {
        this.items = challenges;

        this.af.database.list(QueryConstants.LIST_COMPLETED_CHALLENGES)
          .subscribe(items => {
            this.appService.completedChallenges = items as CompletedChallenge[];
            if (this.appService.completedChallenges && this.appService.completedChallenges.length > 0) {
              for (let completedChallenge of this.appService.completedChallenges) {
                let index = this.items.findIndex(temp => completedChallenge.user_id === this.authService.loggedInUser.uid &&
                  temp.id === completedChallenge.challenge_id);
                if (index > -1) {
                  this.items[index].completed = true;
                }
              }
            }
          });
      });
  }

  changeStatus(e, challenge: Challenge): void {
    if (e.checked) {
      // prompt to enter details of book
      this.appService.completedChallenge = new CompletedChallenge();
      this.appService.completedChallenge.challenge_id = challenge.id;
      window.location.href = '/#book-details';
    }
    else {
      // confirm if mark as unread
      for (let item of this.items) {
        if (item.id === challenge.id) {
          item.completed = false;
          let bookDetails = this.appService.completedChallenges.find(temp => temp.challenge_id === challenge.id);
          this.af.database.object(QueryConstants.LIST_COMPLETED_CHALLENGES + '/' + bookDetails.$key)
            .remove()
            .then(() => {
              this.snackbar.open('Marked as unread', null, {
                duration: 2000,
              });
            });
        }
      }
    }
  }

  viewMore(item: Challenge): void {
    this.appService.completedChallenge = this.appService.completedChallenges.find(temp => temp.challenge_id === item.id);

    if (this.appService.completedChallenge.start_date)
      this.appService.completedChallenge.start_date_object = new Date(this.appService.completedChallenge.start_date);

    if (this.appService.completedChallenge.end_date)
      this.appService.completedChallenge.end_date_object = new Date(this.appService.completedChallenge.end_date);
    window.location.href = '/#book-details';
  }

}
