// // Fetch API desde una API

// const cargarAPIBtn = document.querySelector('#cargarAPI');
// cargarAPIBtn.addEventListener('click', obtenerDatos);


// function obtenerDatos() {
//     fetch('https://picsum.photos/list') 
//         .then( respuesta => {
//             return respuesta.json()
//         }) 
//         .then(resultado => {
//             mostrarHTML(resultado);
//             console.log(resultado)
//         })
// }

// function mostrarHTML(datos) {
    
//     const contenido = document.querySelector('#contenido');

//     let html = '';

//     datos.forEach( perfil => {
//         const { author, post_url } = perfil;

//         html += `
//             <p>Autor: ${author} </p>
//             <a href="${post_url}" target="_blank">Ver Imagen</a>
//         `
//     });

//     contenido.innerHTML = html;
    
// }

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(resultado => mostrarHTML(resultado) )
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const {author, post_url, author_url} = perfil;

        html += `
            <p>Author: ${author}</p>
            <a href="${author_url}" target="_blank">url autor</a>
            <br><br>
            <a href="${post_url}" target="_blank">Ver imagen</a>
            <br><br><br>
        
        
        `
    })

    contenido.innerHTML = html;
}