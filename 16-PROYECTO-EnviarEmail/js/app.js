document.addEventListener('DOMContentLoaded', function() {

	const email = {
		email: '',
		cc: '',
		asunto: '',
		mensaje: ''
	};

	

	//Seleccionar los elementos del interfaz
	const inputEmail = document.querySelector('#email');
	const inputCc = document.querySelector('#cc');
	const inputAsunto = document.querySelector('#asunto');
	const inputMensaje = document.querySelector('#mensaje');
	const formulario = document.querySelector('#formulario');
	const btnSubmit = document.querySelector('#formulario button[type="submit"]');
	const btnReset = document.querySelector('#formulario button[type="reset"]');
	const spinner = document.querySelector('#spinner');


	// Asignar eventos
	inputEmail.addEventListener('blur', validar);
	inputCc.addEventListener('blur', comprobar);
	inputAsunto.addEventListener('blur', validar);
	inputMensaje.addEventListener('blur', validar);
	formulario.addEventListener('submit',enviarEmail );
	btnReset.addEventListener('click', function(e) {
		e.preventDefault();

		//Reiniciar el objeto
		resetFormulario()
	})


	function enviarEmail(e) {
		e.preventDefault();
		spinner.classList.add('flex');
		spinner.classList.remove('hidden');

		setTimeout(() =>{
			spinner.classList.remove('flex');
			spinner.classList.add('hidden');

			//Reiniciar el objeto
			resetFormulario()

			//Crear una alerta
			const alertaExito = document.createElement('p');
			alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'upperrcase');
			alertaExito.textContent = 'Mensaje enviado correctamente';
			formulario.appendChild(alertaExito);

			setTimeout(() => {
				alertaExito.remove();
			}, 3000);
		}, 3000);

	}

	function validar(e) {


		//console.log(e.target.parentElement.nextElementSibling);//elemento padre + siguiente elemento
		if(e.target.value.trim() === '') {//trim elimina espacios en blanco
			mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
			email[e.target.name] = '';
			comprobarEmail();
			return;//Detiene la ejecución del código
		} 

		if(e.target.id === 'email' && !validarEmail(e.target.value)) {
			mostrarAlerta('El email no es válido', e.target.parentElement);
			email[e.target.name] = '';
			comprobarEmail();
			return;
		}

		

		
		

		limpiarAlerta(e.target.parentElement);

		//asignar los valores (si se ejecuta esto significa que hemos pasado las valoraciones)
		email[e.target.name] = e.target.value.trim().toLowerCase();

		//Comprobar el objeto de email
		comprobarEmail();


	}



	function mostrarAlerta(mensaje, referencia) {
		//comprueba si ya existe esa alerta
		limpiarAlerta(referencia);


		// Generar alerta en HTML
		const error = document.createElement('P');//Buena práctica el ponerlo en mayúsculas
		error.textContent = mensaje;
		error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

		
		// Inyectar el elemento error al formulario
		referencia.appendChild(error);//agrégale un hijo al final

	}


	function limpiarAlerta(referencia) {
		const alerta = referencia.querySelector('.bg-red-600');//sólo en este div no en todo el documento
		if(alerta) {
			alerta.remove();
		}
	}

	function validarEmail(email) {
		const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  //Esto es una expresión regular(busca patrones en una cadena de texto)
		const resultado = regex.test(email); //retorna true o false
		return(resultado);
	}

	




	function comprobarEmail() {
		if(Object.values(email).includes('')) { //nos muestra los valores del lado derecho (devuelve true si hay alguno vacío)
		//console.log(Object.keys(email));  //nos muestra los valores del lado izquierdo
			btnSubmit.classList.add('opacity-50');
			btnSubmit.disabled = true;
			return
	
		} 
			btnSubmit.classList.remove('opacity-50');
			btnSubmit.disabled = false;
		
	}


	function resetFormulario() {
		//Reiniciar el objeto
		email.email = '';
		email.asunto = '';
		email.mensaje = '';

		formulario.reset();
		comprobarEmail();
	}


	function comprobar(e) {

		if (e.target.value !== '') {
			if(e.target.id === 'cc' && !validarEmail(e.target.value)) {
				mostrarAlerta('El email no es válido', e.target.parentElement);
				email[e.target.name] = '';
				comprobarEmail();
				return;
			}
		}
		

		limpiarAlerta(e.target.parentElement);

		//asignar los valores (si se ejecuta esto significa que hemos pasado las valoraciones)
		email[e.target.name] = e.target.value.trim().toLowerCase();

		//Comprobar el objeto de email
		comprobarEmail();
		
	}



	console.log(email);

});


