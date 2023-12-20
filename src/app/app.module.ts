import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeComponent } from './iframe/iframe.component';
import { PlayPlaceComponent } from './iframe/play-place/play-place.component';
import { HeaderComponent } from './iframe/header/header.component';
import { TimerComponent } from './iframe/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    PlayPlaceComponent,
    HeaderComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
