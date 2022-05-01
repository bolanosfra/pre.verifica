import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { ListaprenoyazioniComponent } from './listaprenoyazioni/listaprenoyazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaprenoyazioniComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
