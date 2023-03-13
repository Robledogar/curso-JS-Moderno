/**************** VARIABLES *********************/
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
	//Cuando agregas un curso presionando "Agregar al carrito"
	listaCursos.addEventListener('click', agregarCurso);

	// Elimina cursos del carrito
	carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos del localstorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito') || []);

        carritoHTML();
    });

	//Vaciar el carrito
	vaciarCarritoBtn.addEventListener('click', () => {
		articulosCarrito = []; //reseteamos el array
		limpiarHTML(); //Eliminamos todo el HTML
	});

}


/**************** FUNCIONES *********************/
function agregarCurso(e) {
	e.preventDefault();


	if(e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
	

		leerDatosCurso(cursoSeleccionado);
	}
}

// Elimina el curso del carrito
function eliminarCurso(e) {
	console.log(e.target.classList);
	if(e.target.classList.contains('borrar-curso')) {
		const cursoID = e.target.getAttribute('data-id');

		// Elimina del array articulosCarrito por el data-id
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);
		carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
	}
}

//Lee el contenido del html al que hacemos click y extrae la info del curso
function leerDatosCurso(curso) {
	//console.log(curso);

	//Crear un objeto con el contenido del curso actual
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	//Revisa si un elemento ya existe en el carrito
	const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
	if(existe) {
		//Actualizamos la cantidad
		const cursos = articulosCarrito.map(curso => {
			if(curso.id === infoCurso.id) {
				curso.cantidad++;
				return curso; //retorna el objeto actualizado
			} else {
				return curso; // retorna los objetos que no son los duplicados
			}
		});
		articulosCarrito = [...cursos];

	} else {
		// Agrega elementos al array de carrito
	articulosCarrito = [...articulosCarrito, infoCurso]; //toma también una copia de los ya agregados
	
	}

	console.log(articulosCarrito);

	carritoHTML();

}


//Muestra el carrito de compras en el HTML
function carritoHTML() {

	//Limpiar el HTML
	limpiarHTML();


	//Recorre el carrito y genera el HTML
	articulosCarrito.forEach( curso => {
		const {imagen, titulo, precio,cantidad, id} = curso; //podriamos usar distruction o como se diga y quitar el "curso" de todos los de abajo para optimizar el código
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width="100">
			</td>

			<td>
				${titulo}
			</td>

			<td>
				${precio}
			</td>

			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
			</td>
		`;

		//Agrega el html del carrito en el tbody
		contenedorCarrito.appendChild(row);//agrega elementos al final del tbody pero no limpia los anteriores
	});

    // Agregar el carrito de compras al LocalStorage
    sincronizarStorage();
}


function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML() {
	//Forma lenta
	//contenedorCarrito.innerHTML = '';

	//Forma rápida
	while(contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild)
	}
}

// Comentario de prueba para GitHub



// Comentario de la version 3.0




