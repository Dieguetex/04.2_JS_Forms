function main () {

    let form = document.querySelector('form')
    let inDni = document.querySelector('#dni')

    inDni.setCustomValidity('DNI Incorrecto')

    form.addEventListener('submit', enviar)
    inDni.addEventListener('input', validaDNI)

    function enviar(oE) {
        oE.preventDefault()
        /**
         * TODO: Codigo real de envio
         */
        console.log('Enviando')
    }

    function validaDNI() {
        inDni.setCustomValidity('DNI Incorrecto')
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let num = inDni.value.substring(0, inDni.value.length-1)
        let letra =  inDni.value.substring(inDni.value.length-1)
        console.log(num, letra)
        console.dir(inDni)

        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return false
        } else if(LETRAS[num%23] !== letra) {
            return false
        }
        inDni.setCustomValidity('')
    }
}




document.addEventListener('DOMContentLoaded', main)