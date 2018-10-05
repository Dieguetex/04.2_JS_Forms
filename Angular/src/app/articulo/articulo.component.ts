import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cas-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  //encapsula el css!!! 
  /* encapsulation: ViewEncapsulation.None */
})
export class ArticuloComponent implements OnInit {
  @Input() autor: string
  @Input() titulo: string
 /*  @Input() contenido: string */

  constructor() { }

  ngOnInit() {
  }

}
