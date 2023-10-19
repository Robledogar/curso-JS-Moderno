// MIXIN PATTERN

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre}, Email: ${this.email}`)
    },
    otraFuncion() {
        console.log('Puedo agregar todas las funciones que quiera');
    }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Juan', 'correo@correo.com');
const cliente2 = new Persona('cliente', 'cliente@correo.com');


console.log(cliente);
cliente.mostrarInformacion();
cliente.otraFuncion();

console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.otraFuncion();

