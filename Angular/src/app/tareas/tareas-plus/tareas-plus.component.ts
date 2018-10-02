import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {

  titulo: string
  rutaGoogle: string

  constructor() { 
   
  }

  ngOnInit() {
     this.titulo = 'Lista plusssss'
     this.rutaGoogle = 'https://www.google.es'
  }

}
