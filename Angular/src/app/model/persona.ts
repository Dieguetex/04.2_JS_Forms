class Persona {
    public name: string
    constructor(name:string) {
        this.name = name
    }

}

class personaMejor {
    constructor( public name:string ) {
    }

}



let persona = new Persona("Pepe") 
console.log(persona) // {name: 'Pepe'}