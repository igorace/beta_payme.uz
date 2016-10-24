import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AndroidComponent, AndroidModalComponent } from './dialogs/android/android.component';
import { IosComponent, IosModalComponent } from './dialogs/ios/ios.component';
import { BetaTestComponent, BetaTestModal } from './dialogs/beta-test/beta-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AndroidComponent,
    IosComponent,
    BetaTestComponent,
    BetaTestModal,
    AndroidModalComponent,
    IosModalComponent
  ],
  entryComponents: [BetaTestComponent, AndroidComponent, IosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
