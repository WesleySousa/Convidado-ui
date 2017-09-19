import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvidadoService } from './convidado.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [ConvidadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
