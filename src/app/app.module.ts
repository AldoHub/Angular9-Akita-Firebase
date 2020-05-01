import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire'; // AngularFire module
import { AngularFirestoreModule } from '@angular/fire/firestore';// Firestore module
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [       
    ReactiveFormsModule, 
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    BrowserModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}, { provide: StorageBucket, useValue: "gs://akita-firebase-yt.appspot.com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
