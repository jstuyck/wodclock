import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
