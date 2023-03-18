// CAMPOS DEL FORMULARIO
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// USER INTERFACE
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

// CLASES
class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];


    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id );
    }

}


class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar el aviso HTML tras varios segundos
        setTimeout(() => {
            divMensaje.remove();
        },5000);
    }

    imprimirCitas({citas}) { //también puedo hacer destructuring aquí
        
        this.limpiarHTML();

        citas.forEach(cita => {
           const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            
           const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            // Botón para eliminar esta cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar X';

            btnEliminar.onclick = () =>  eliminarCita(id);
          
          
            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });

    }

     // Limpiar HTML
     limpiarHTML() {
	
        while(contenedorCitas.firstChild) {
        contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

// Las instanciamos
const ui = new UI();
const administrarCitas = new Citas();



// REGISTRAR EVENTOS
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}


// OBJETO CON LA INFORMACIÓN DE LA CITA
const citaObj = { //hay que asegurarse que exista "name" en el input con el mismo nombre que estas propiedades
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}


// AGREGA DATOS AL OBJETO DE CITA
function datosCita(e) {
    citaObj[e.target.name] = e.target.value //introduce el valor del input dentro del objeto en el lugar correspondiente

}

// VALIDA Y AGREGA UNA NUEVA CITA A LA CLASE DE CITAS
function nuevaCita(e) {
    e.preventDefault();

    // Extraer ls información del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    // Generar un id único
    citaObj.id = Date.now();

    // Creando una nueva cita
    administrarCitas.agregarCita({...citaObj}); //le pasamos una copia ({...citaObj})
    
    // Reiniciar el objeto para la validación
    reiniciarObjeto();

    // Reinicia el formulario
    formulario.reset(); 

    // Mostrar el HTML
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';

}


function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se elimino correctamente');

    // Refrescar las citas
   ui.imprimirCitas(administrarCitas);
}





