import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {MatIcon, MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
