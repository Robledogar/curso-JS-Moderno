const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},

];

// const resultado = carrito.filter(producto => {
//     return producto.precio > 400;
// });
// console.log(resultado)


//Son lo mismo
const mayor400 = producto => {
    return producto.precio > 400;
}
const resultado = carrito.filter(mayor400);
console.log(resultado)

console.log(carrito)

