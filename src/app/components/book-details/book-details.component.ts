import { CompletedChallenge } from './../../models/completed-challenge.model';
import { QueryConstants } from './../../constants';
import { AngularFire } from 'angularfire2';
import { AuthService } from './../../services/auth.service';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  dateFormat: string;

  constructor(public appService: AppService,
    private authService: AuthService,
    private af: AngularFire,
    private snackbar: MdSnackBar) {
    this.dateFormat = "DD-MM-YYYY";
  }

  ngOnInit() { }

  saveBookDetails() {
    let bookDetails = this.appService.completedChallenge;
    bookDetails.user_id = this.authService.loggedInUser.uid;

    if (bookDetails.start_date_object)
      bookDetails.start_date = bookDetails.start_date_object.toString();

    if (bookDetails.end_date_object)
      bookDetails.end_date = bookDetails.end_date_object.toString();

    let data = this.appService.completedChallenges.find(temp => temp.challenge_id === bookDetails.challenge_id);
    let observable = this.af.database.list(QueryConstants.LIST_COMPLETED_CHALLENGES);
    if (data) {
      observable.update(data.$key, {
        book_name: bookDetails.book_name,
        book_author: bookDetails.book_author,
        start_date: bookDetails.start_date,
        end_date: bookDetails.end_date,
        challenge_id: bookDetails.challenge_id,
        user_id: bookDetails.user_id
      })
        .then(() => {
          this.snackbar.open('Updated details!', null, {
            duration: 2000,
          });
          this.appService.completedChallenge = new CompletedChallenge();
          window.location.href = '/#challenge-list';
        });
    }
    else {
      observable
        .push(bookDetails)
        .then(() => {
          this.snackbar.open('Congrats! You completed another milestone!', null, {
            duration: 2000,
          });
          this.appService.completedChallenge = new CompletedChallenge();
          window.location.href = '/#challenge-list';
        });
    }
  }
}
