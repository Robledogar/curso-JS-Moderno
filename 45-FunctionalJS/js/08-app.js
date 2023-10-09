//Un closure es una forma de acceder a una función o valor desde el exterior

// const cliente = 'Juan';

// function mostrarCliente() {
//     const cliente = 'Pablo'; // Esta variable sólo existe dentro de esta función

//     console.log(cliente);
// }

// console.log(cliente)
// mostrarCliente();

const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre; //Esto saca afuera la función (closure)
}

const cliente = obtenerCliente();

cliente();
