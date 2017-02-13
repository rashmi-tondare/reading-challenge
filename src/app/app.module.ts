import { AppService } from './services/app.service';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ChallengeListComponent } from './components/challenge-list/challenge-list.component';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';
import { ConfirmationDialogComponent } from './widgets/confirmation-dialog/confirmation-dialog.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { DatepickerModule } from 'angular2-material-datepicker';
import { BuildNowComponent } from './components/build-now/build-now.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC_6BaHE4QuLraLMmABgGOnyC8v7_1BnAM',
  authDomain: 'reading-challenge-f91af.firebaseapp.com',
  databaseURL: 'https://reading-challenge-f91af.firebaseio.com',
  storageBucket: 'reading-challenge-f91af.appspot.com',
  messagingSenderId: '1092016231214'
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ConfirmationDialogComponent,
    ChallengeListComponent,
    BookDetailsComponent,
    BuildNowComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [
    UtilityService,
    AuthService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
