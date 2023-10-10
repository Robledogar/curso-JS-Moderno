// New binding
function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
} 

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Window binding(Se asigna a la ventana global de esta forma)
window.color = 'Negro';

function hola() {
    console.log(color);
}

hola();