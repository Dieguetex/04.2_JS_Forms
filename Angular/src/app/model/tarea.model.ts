export interface TareaIf {
    nombre: string,
    isComplete: boolean
}

//el interface sirve mas relacionado con las APIs, class para el resto, pero realmente da lo mismo.
export class TareaModel implements TareaIf{
    /*  nombre: string
     constructor( nombre ) {
       this.nombre = nombre
     } */
   
     constructor(
       public nombre: string,
       public isComplete: boolean
       ){}
    
}
