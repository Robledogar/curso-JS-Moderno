
// Constructores
function seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {};

// LLena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year'); 
    
    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);

    }
}

// Instanciar UI
const ui = new UI();



document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();// LLena el select con los años
});



eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer el año
    const year = document.querySelector('#year').value;


    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value; //así se lee este tipo de selector
    
    if(marca === '' || year === '' || tipo === '') {
        console.log('No pasó la validación');
    } else {
        console.log('Sí pasó la validación');

    }
    
}