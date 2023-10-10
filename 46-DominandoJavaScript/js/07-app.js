// Modelo de concurrencia y loop de eventos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=119s


console.log('Primero');
    
setTimeout(() => {
    console.log('Segundo');
}, 0);


console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido...')
}).then(console.log)

console.log('Último');

function hola() {
    console.log('Hola')
}

hola();