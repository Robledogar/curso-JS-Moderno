// Hoisting para referirse a como funcionan los contextos de ejecución de Javascript
//En Javascript hay dos fases (registra las funciones en la primera y las manda a llamar en la segunda)

obtenerCliente('Jose');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}


obtenerCliente2('Jose Luís'); // De esta manera saldría error
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}



