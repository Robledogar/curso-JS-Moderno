// Self tambien se refiere a la ventana global

self.onload = () => {
    console.log('Ventana lista...');
}

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El producto ${self.nombre} tienen un precio de ${self.precio}€`;
    }
}

console.log(producto.mostrarInfo());