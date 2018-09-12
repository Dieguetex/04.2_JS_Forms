function main() {

    function promesas() {
        return new Promise(
            (resolve, reject) => {
                setTimeout ( 
                    () => {resolve()}, 3000)
            }
        )
    }

    function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then(pintar)
    
    console.log('Ultima linea')


}

document.addEventListener('DOMContentLoaded', main)