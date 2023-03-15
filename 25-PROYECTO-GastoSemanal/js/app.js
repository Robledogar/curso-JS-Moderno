// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}






// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}


class UI {
    insertarPresupuesto(cantidad) {
        // Extrayendo el valor
        const {presupuesto, restante} = cantidad;

        // Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');

        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el aviso HTML tras varios segundos
        setTimeout(() => {
            divMensaje.remove();
        },3000);
    }
}


// Instanciar UI
const ui = new UI();


let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload(); //Recarga la página de nuevo
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    

    ui.insertarPresupuesto(presupuesto);

}


// Agrega gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;

    }

    //Generar un objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()} //une nombre y cantidad a gasto (lo contrario a un destructuring)

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje de gasto añadido correctamente
    ui.imprimirAlerta('Gasto agregado correctamente');

    // Reinicia el formulario
    formulario.reset();

}




