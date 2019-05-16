import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BokareComponent } from './components/bokare/bokare.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BookingButtonComponent } from './components/booking-button/booking-button.component';
import { BookingHeaderComponent } from './components/booking-header/booking-header.component';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BokareComponent,
    BookingButtonComponent,
    BookingHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
