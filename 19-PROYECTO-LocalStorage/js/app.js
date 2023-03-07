// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event listeners
eventListeners();


function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; // Soluciona el problema de que no al inicio esté vacío (evita el null)
        console.log(tweets);

        crearHTML();
    });
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if(tweet === '') {
       mostrarError('Un mensaje no puede estar vacío')
        return; //previene que se sigan ejecutandomás lineas de código en esta función
    }   

    const tweetObj = {
        id: Date.now(),
        tweet // Si llave y valor son iguales basta con poner uno (tweet: tweet)
    }

    // Añadir al array de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el Html
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta a los 3 seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {

            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.textContent = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();
}

// Agrega los tweets actuales a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}


// Elimina un tweet
function borrarTweet(id) {
    //console.log('Borrando...', id)
    tweets = tweets.filter( tweet => tweet.id !== id); // Esto filtraría todos los demás (el que estas accionando, no)
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}