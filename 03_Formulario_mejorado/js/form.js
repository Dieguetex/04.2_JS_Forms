export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.domUser = document.querySelector('#user')
        this.data = {
            user : '',
            pass : '',
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
        /* 
        2 formas de hacerlo
         */
        this.data.user = this.domUser.value
        this.data.pass = document.querySelector('#pass').value
        console.dir(this.data)
    }
}