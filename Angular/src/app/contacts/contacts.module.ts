import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactoComponent,
    ListaContactosComponent
  ],
  entryComponents: [
    ContactsComponent
  ]
})
export class ContactsModule { }
