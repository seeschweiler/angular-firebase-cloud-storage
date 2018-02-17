import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCAgwI9lSNwjZsPCEvJuc6qVxiw-moYEmA",
      authDomain: "fir-demo-1a77f.firebaseapp.com",
      projectId: "fir-demo-1a77f",
      storageBucket: "fir-demo-1a77f.appspot.com"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
