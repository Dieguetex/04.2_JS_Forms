import { listaTareas } from "./lista-tareas.js";

export class Index {
    constructor() {
        console.log('Creado Index');
        new listaTareas()
    }
}