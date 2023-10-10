// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// Call existe en todas las funciones de JavaScript incluso en las que creamos nosotros (hay que pasarle los elementos de un array de uno en uno)
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]); // Toma datos de 3 sitios

//Apply si puede tomar todo el arreglo
persona.apply(informacion, musicaFavorita);

//Bind te crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();
