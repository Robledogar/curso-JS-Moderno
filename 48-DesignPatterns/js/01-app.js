//CLASS PATTERN

class Persona {
    constructor (nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    //Metodo para mostrar info
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    }

}

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);
persona.mostrarInfo(); //llama al método