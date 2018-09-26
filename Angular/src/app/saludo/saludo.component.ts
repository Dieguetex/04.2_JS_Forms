import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor() { }

  nombre: string
  ngOnInit() {
    this.nombre = 'Pepe'
  }

  btnBorrar() {
    console.log('HOLA')
    this.nombre = ''
  }

}
