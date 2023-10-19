//SINGLETON (previene que no se creen multiples instancias)

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
        
    }
}

const persona = new Persona ('Jose', 'jose@gmail.com');
console.log(persona);

const persona2 = new Persona ('Juan', 'juan@gmail.com');
console.log(persona2);

// const persona3 = new Persona ('Maria', 'maria@gmail.com');
// console.log(persona3);