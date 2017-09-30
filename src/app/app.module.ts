import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarVaiComponent } from './navbar-vai/navbar-vai.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVaiComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
