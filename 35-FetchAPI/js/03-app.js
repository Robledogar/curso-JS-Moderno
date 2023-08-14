// // Fetch API desde un JSON (Objeto)

// const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
// cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


// function obtenerDatos() {
//     fetch('data/empleados.json') 
//         .then( respuesta => {
//             return respuesta.json()
//         }) 
//         .then(resultado => {
//             mostrarHTML(resultado);
//             console.log(resultado)
//         })
// }

// function mostrarHTML(empleados) {
//     const contenido = document.querySelector('#contenido');

//     let html = '';

//     empleados.forEach( empleado => {
//         const { id, nombre, empresa, trabajo} = empleado;

//         html += `
//             <p>Empleado: ${nombre} </p>
//             <p>ID: ${id} </p>
//             <p>Empresa: ${empresa} </p>
//             <p>Trabajo: ${trabajo} </p>
//         `
//     });

//     contenido.innerHTML = html;
    
// }


const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

// document.addEventListener('DOMContentLoaded', obtenerDatos ); //para obtener los datos al cargar la pantalla

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(resultado => mostrarHTML(resultado) )
}

function mostrarHTML (empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p> 
        `;
    });

    contenido.innerHTML = html;
}

