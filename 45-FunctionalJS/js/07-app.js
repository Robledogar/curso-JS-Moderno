
//Funciones que retornan otra función
const obtenerCliente = () => () => console.log('Jose Luís');
const fn = obtenerCliente();

fn();