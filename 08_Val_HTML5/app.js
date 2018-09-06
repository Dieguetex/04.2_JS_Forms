function main() {
    let inNombre  = document.querySelector('#nombre')
    let inApellido  = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')


    // 2 Eventos que no hemos usado:
    /**
     * Focus: Cuando un elemento gana el foco
     * blur: Cuando un elemento pierde el foco 
     */

    inNombre.addEventListener('blur', validaTexto)
    inNombre.addEventListener('input', validaTexto)
    inApellido.addEventListener('blur', validaTexto)
    inApellido.addEventListener('input', validaTexto)


    

    function validaTexto() {
        
        if(!this.value){
            this.nextElementSibling.innerHTML = `${this.id} incorrecto`
        } else {
            this.nextElementSibling.innerHTML = ''
            validaFormulario()
        }
    }

    function validaFormulario() {
        if (inNombre.value && inApellido.value) {
            btnEnviar.disabled = false
        }
    }
}

document.addEventListener('DOMContentLoaded', main)