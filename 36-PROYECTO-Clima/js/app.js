loconst container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  //Validar
  const ciudad = document.querySelector('#ciudad').value;
  const pais = document.querySelector('#pais').value;

  // console.log(ciudad);
  // console.log(pais);

  if(ciudad === '' || pais === '') {
    //Hubo un error
    mostrarError('Ambos campos son obligatorios');
  
    return; //Si prescindes del "return" en ese código, la ejecución del programa continuará después de mostrar el mensaje de error, independientemente de si los campos ciudad y país están vacíos o no. Esto significa que el código seguirá ejecutando las instrucciones que siguen después del bloque condicional sin importar si se encontró un error o no.
  }

  //Consultaríamos la API
  consultarAPI(ciudad, pais);
}


function mostrarError(mensaje) {
  const alerta = document.querySelector('.bg-red-100');
  

  if(!alerta) {
    
      //Crear alerta
    const alerta = document.createElement('div');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
      <strong class="font-bold">ERROR</strong>
      <span class="block">${mensaje}</span>
    
    
    `;

    container.appendChild(alerta);

    //Se elimina la alerta después de 5 segundos
    setTimeout(() => {
      alerta.remove();
    }, 5000)
  }

}

function consultarAPI(ciudad, pais) {
  const appId = 'Mi Id Personal';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

  // console.log(url);

  // Muestra un spinner de carga
  spinner();

  setTimeout(() => {
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      
      // console.log(datos);
      limpiarHTML();// Limpiar el html previo
      if(datos.cod === '404') {
        mostrarError('Ciudad no encontrada');
        return;
      }

      //Imprime la respuesta en el HTML
      console.log(datos)
      mostrarClima(datos);
    })

  }, 1000)

  

}

function mostrarClima(datos) {
  const {name, main: {temp, temp_max, temp_min } } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);
  const min = kelvinACentigrados(temp_min);

  const nombreCiudad = document.createElement('p');
  nombreCiudad.textContent = `Temperatura en ${name}`;
  nombreCiudad.classList.add('text-2xl', 'font-bold');
  
  const actual = document.createElement('p');
  actual.innerHTML = `${centigrados} &#8451;`;//esto se llama entidad(para poner ºC)
  actual.classList.add('font-bold', 'text-6xl');

  const tempMaxima = document.createElement('p');
  tempMaxima.innerHTML = `Max: ${max} &#8451;`;
  tempMaxima.classList.add('text-xl');

  const tempMinima = document.createElement('p');
  tempMinima.innerHTML = `Min: ${min} &#8451;`;
  tempMinima.classList.add('text-xl');



  const resultadoDiv = document.createElement('div');
  resultadoDiv.classList.add('text-center', 'text-white');

  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMaxima);
  resultadoDiv.appendChild(tempMinima);



  resultado.appendChild(resultadoDiv);

}

const kelvinACentigrados = grados => parseInt(grados - 273.15); //Previamente era una función que fue optimizada en una sola línea (los llama Helpers(una entrada de datos y una acción))





function limpiarHTML() {
  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {

  limpiarHTML();

  const divSpinner = document.createElement('div');
  divSpinner.classList.add('sk-fading-circle');

  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  `

  resultado.appendChild(divSpinner);
}