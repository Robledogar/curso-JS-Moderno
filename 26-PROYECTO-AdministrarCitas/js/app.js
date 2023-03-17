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



// REGISTRAR EVENTOS
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

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

    console.log(citaObj);
}




