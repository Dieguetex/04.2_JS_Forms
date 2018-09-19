/**
 * Servicio AJAX
 */
export class FetchService {
    constructor() {
        this.oDatos = {}
    }

    send(url, config) {
        this.url = url
        this.config = config
        return new Promise( (resolve, reject) => {
            fetch(this.url, this.config)
            .then(
                (response) => {
                    if (
                        response.status >= 200 && response.status < 300
                        //Hay una propiedad del objeto response, "ok", que te devuelve true si el status es 200. 
                        // response.ok
                        ) {
                        console.log(response)
                        return response.json()
                    } else {
                        reject( 
                            { status : response.status,
                            statusText: response.statusText}
                        )
                    }
                }
            ).then(
                (data) => { resolve( data )}
            )
        }
        )        
    }
}


