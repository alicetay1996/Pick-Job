import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PickitemscanComponent } from './pickitemscan/pickitemscan.component';

@NgModule({
  declarations: [
    AppComponent,
    PickitemscanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
