export class Form {
    constructor() {
        this.inpNombre = document.querySelector('#nombre')
        this.btnEnviar = document.querySelector('#btnEnviar')
        this.output = document.querySelector('#output')
        this.btnBorrar = document.querySelector('#btnBorrar')
        console.dir(this)
        this.btnEnviar.addEventListener('click', this.enviar.bind(this))
        this.btnBorrar.addEventListener('click', this.borrar.bind(this))
    }

    enviar() {
        const nombre = this.inpNombre.value
        this.output.innerHTML = `Hola ${nombre}`
    }
    borrar() {
        this.inpNombre.value = ''
        this.output.innerHTML = ''
    }
}
