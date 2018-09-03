
/* FOMRAS DE INICIALIZAR */

/* function iniciar() {
    console.log('Iniciado JS')
}

document.addEventListener('DOMContentLoaded', iniciar) */

/* ========================================================== */

/* document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciado JS, función anónoma')
}) */

/* document.addEventListener('DOMContentLoaded', () => {
    console.log('Iniciado JS, función anónoma')
}) */



import {Form} from './Form.js'
import {Interactivo} from './intreractivo.js'

/* document.addEventListener('DOMContentLoaded',
                        function () {
                              new Main()
                        }
) */

document.addEventListener('DOMContentLoaded',  
() => {
    new Form()
    new Interactivo()
}) 
