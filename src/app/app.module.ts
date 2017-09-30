import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { DataTableModule, ButtonModule, InputTextModule, 
  InputMaskModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarVaiComponent } from './navbar-vai/navbar-vai.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from "./item.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarVaiComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule, 
    CalendarModule
  ],
  providers: [ ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
