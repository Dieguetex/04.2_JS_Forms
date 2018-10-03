import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../model/contacto.model';
import { USERS } from '../../datos/contactos.mock';

@Component({
  selector: 'cas-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  aContactos: Array<ContactoIf>

  constructor() { }

  ngOnInit() {
    this.aContactos = USERS
  }
  
  borrarContacto(badEmail){
    console.dir(badEmail)

    //Función de filtrado
    this.aContactos = this.aContactos.filter(
      (item) => item.email != badEmail)
    /* this.aContactos.splice(id, 1) */
    
  }

}
