import { QueryConstants } from './../../constants';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.items = this.af.database.list(QueryConstants.LIST_CHALLENGES, {
      query: {
        created_by: QueryConstants.CREATED_BY_ADMIN
      }
    });
  }

  changeStatus(e): void {
    if (e.checked) {
      // prompt to enter details of book
    }
    else {
      // confirm if really mark as unread
    }
  }

}
