// El Scope es el alcance de una variable

// const cliente = 'Juan';

// function mostrarCliente() {
//     const cliente = 'Pedro'; // Tiene prioridad en el Scope
//     console.log(cliente);
// }

// mostrarCliente();


const login = true;

function clienteLogueado() {
    const cliente = 'Juan';
    console.log(cliente);

    if(login) {
        const cliente = 'Admin';
        console.log(cliente);
    }
}

clienteLogueado();