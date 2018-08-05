import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseCongige = {
  apiKey: "AIzaSyCLCs6VbdU2y7nzKv6jyEEiQSzFKuEegHs",
  authDomain: "testang-33df0.firebaseapp.com",
  databaseURL: "https://testang-33df0.firebaseio.com",
  projectId: "testang-33df0",
  storageBucket: "testang-33df0.appspot.com",
  messagingSenderId: "938737977259"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseCongige),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
