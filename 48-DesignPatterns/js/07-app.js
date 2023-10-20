// NAMESPACE (para evitar "choques" con otras partes del código)

const restauranteApp = {};

restauranteApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }

];

restauranteApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)

        });
    },
    ordenar : id => {
        console.log(`Tu platillo: ${restauranteApp.platillos[id].platillo} se está preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restauranteApp.platillos.push(nuevo);
    }

}



restauranteApp.funciones.ordenar(1);
restauranteApp.funciones.agregarPlatillo('Taco', 20);

const {platillos} = restauranteApp;
restauranteApp.funciones.mostrarMenu(platillos);

