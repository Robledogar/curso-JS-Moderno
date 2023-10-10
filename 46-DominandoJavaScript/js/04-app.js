// Implicit Binding

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {
            console.log(`Mi mascota se llama ${this.nombre} y tiene ${this.edad} años`);
        }
    }
}

usuario.informacion(); //Error "El nombre no está definido" si no ponemos this. delante de nombre;
usuario.mascota.informacion();
