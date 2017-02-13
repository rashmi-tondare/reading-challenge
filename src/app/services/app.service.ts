import { CompletedChallenge } from './../models/completed-challenge.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  completedChallenge: CompletedChallenge;
  completedChallenges: CompletedChallenge[];

  constructor() { 
    this.completedChallenge = new CompletedChallenge();
    this.completedChallenges = new Array<CompletedChallenge>();
  }
}
