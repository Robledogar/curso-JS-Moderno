// Dos únicos elementos del Html
const contenedorSuperior = document.querySelector('#contenedorSuperior');
contenedorSuperior.classList.add('flex', 'items-center', 'justify-center', 'flex-col')

const contenedorInferior = document.querySelector('#contenedorInferior');

// Variables para crear elementos
const divPrincipal = document.createElement('DIV');
divPrincipal.classList.add('flex', 'items-center', 'justify-center', 'flex-col');

const divBuscador = document.createElement('DIV');
divBuscador.classList.add('flex', 'items-center', 'flex-col', 'w-64', 'bg-gray-300','m-12', 'p-4', 'rounded');
divBuscador.textContent = 'SELECCIONA UNA ESTACION';

const selectBuscador = document.createElement('SELECT');
selectBuscador.classList.add('m-4')

const botonBuscador = document.createElement('BUTTON');
botonBuscador.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'm-4')
botonBuscador.textContent = 'BUSCAR'; 


contenedorInferior.appendChild(divPrincipal);


divBuscador.appendChild(selectBuscador);
divBuscador.appendChild(botonBuscador);
contenedorSuperior.appendChild(divBuscador);



document.addEventListener('DOMContentLoaded', mostrarBuscador);

let valorSeleccionado;

// function mostrarContenido() {
  //API Openweather
  // const appId = 'bca3a832aafe51e36364aa79f14bd713';
  // const ciudad = 'Zocca';
  // const pais = 'IT'
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  



// const numeroResultados = 50;
// const url = `https://api.disneyapi.dev/character?page=1&pageSize=${numeroResultados}`

//   fetch(url) //Hacemos un llamado
//       .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
      
//       .then(resultado => funcionResultado(resultado.data) )//Entonces quiero los resultados          
// }

// function funcionResultado(datos = []) {
//   console.log(datos.length)
//   console.log(datos);
//   datos.forEach(dato => {
//     const{_id, name, films} = dato;

//     // console.log(films);

//     const parrafoNombre = document.createElement('P');
//     parrafoNombre.textContent = name;
    

//     divPrincipal.appendChild(parrafoNombre);
    
//   })
// }


//API ITEMS DE JUEGO DE ROL
// async function mostrarContenido() {

// const url = 'https://rpg-items.p.rapidapi.com/item';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66f5854ed1msh082dfe15df8bad0p118981jsn61ea14f10dac',
// 		'X-RapidAPI-Host': 'rpg-items.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	funcionResultado(result);
// } catch (error) {
// 	console.error(error);
// }
  

// function funcionResultado(datos = []) {
//   console.log(datos.length)
//   console.log(datos);
//   datos.forEach(dato => {
//     const{name, slot, rarity} = dato;

//     if(rarity === 'rare' && (slot === 'legs' || slot === 'helm') ){

//       const parrafoNombre = document.createElement('P');
//       parrafoNombre.textContent = `${name} --> ${slot} --> ${rarity}`;
    

//       divPrincipal.appendChild(parrafoNombre);
//     }
    
//   })

//   const cantidadHijos = divPrincipal.getElementsByTagName('p')

//     console.log(`El número de resultados es: ${cantidadHijos.length}`);
// }

// }




//PRACTICAS CON LA PAGINA DE HEARSTONE EN FORMATO JSON



// function mostrarContenido() {



// const url = `https://api.hearthstonejson.com/v1/121569/esES/cards.collectible.json`

//   fetch(url) //Hacemos un llamado
//       .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
      
//       .then(resultado => funcionResultado(resultado) )//Entonces quiero los resultados          
// }

// function funcionResultado(datos = []) {
//   console.log(datos.length)
//   console.log(datos);

//   datos.forEach(dato => {
//     const{attack, name, health, rarity} = dato;

//     if(attack) {
//           const divCarta = document.createElement('DIV');
//           divCarta.classList.add('w-1/2', 'h-32', 'rounded-md', 'shadow-md', 'bg-gray-100', 'm-4', 'p-2', 'flex', 'items-center', 'justify-center', 'flex-col');

//           const parrafoNombre = document.createElement('P');
//           parrafoNombre.classList.add('text-blue-500', 'uppercase', 'text-xl')
//           parrafoNombre.textContent = name;

//           const parrafoAtaque = document.createElement('P');
//           parrafoAtaque.textContent = `Ataque: ${attack}`;

//           const parrafoSalud = document.createElement('P');
//           parrafoSalud.textContent = `Salud: ${health}`;

//           const parrafoRareza = document.createElement('P');
//           parrafoRareza.classList.add('text-red-500');
//           parrafoRareza.textContent = rarity;

//           divCarta.appendChild(parrafoNombre);
//           divCarta.appendChild(parrafoAtaque);
//           divCarta.appendChild(parrafoSalud);
//           divCarta.appendChild(parrafoRareza);

        
//           divPrincipal.appendChild(divCarta);
          
//         }
//     })

//         const cantidadHijos = divPrincipal.getElementsByTagName('p')

//         console.log(`El número de resultados es: ${cantidadHijos.length}`);

    
    
// }


// DATOS DEL GOBIERNO
// https://opendata.gijon.es/descargar.php?id=944&tipo=JSON




function mostrarBuscador() {
  const url = `https://opendata.gijon.es/descargar.php?id=944&tipo=JSON`
  
    fetch(url) //Hacemos un llamado
        .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
        
        .then(resultado => funcionResultadoParaBuscador(resultado.calidadaires.calidadaire) )//Entonces quiero los resultados          
  }
  
  function funcionResultadoParaBuscador(datos = []) {
    console.log(datos.length)
    console.log(datos);
    const estacionesDistintas = [];

    datos.forEach(dato => {

      const{título} = dato;
      
      if(estacionesDistintas.some(item => item.título === título)) {
        
      } else {
        estacionesDistintas.push(dato);
        const opcionDelSelect = document.createElement('OPTION');
        opcionDelSelect.value = título;
        opcionDelSelect.textContent = título;

        selectBuscador.appendChild(opcionDelSelect);

      }
    })

    console.log(estacionesDistintas);


botonBuscador.addEventListener('click', function() {
  valorSeleccionado = selectBuscador.value;
  mostrarContenido();
})

}





function mostrarContenido() {

  limpiarHTML(divPrincipal);
  spinner();

  setTimeout(() => {
    
    const url = `https://opendata.gijon.es/descargar.php?id=944&tipo=JSON`
  
    fetch(url) //Hacemos un llamado
        .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
        
        .then(resultado => funcionResultado(resultado.calidadaires.calidadaire) )//Entonces quiero los resultados          

   

  }, 500);

  
    


  }
  
  
  function funcionResultado(datos = []) {
    
    datos.forEach(dato => {
      const{título, fecha, pm10} = dato;

      if(título === valorSeleccionado) {
            const divCarta = document.createElement('DIV');
            divCarta.classList.add('w-1/2', 'h-32', 'rounded-md', 'shadow-md', 'bg-gray-100', 'm-4', 'p-2', 'flex', 'items-center', 'justify-center', 'flex-col');
  
            const parrafoEstacion = document.createElement('P');
            parrafoEstacion.classList.add('text-blue-500')
            parrafoEstacion.textContent = título;

            const parrafoFecha = document.createElement('P');
            parrafoFecha.classList.add('text-xl')
            parrafoFecha.textContent = fecha;

            const parrafoParticulas = document.createElement('P');
            parrafoParticulas.classList.add('text-xl')
          
              if(pm10 > 50) {
                parrafoParticulas.classList.add('text-red-500')
              }
            parrafoParticulas.textContent =  `${pm10}µg/m³`;
            
            
  
            divCarta.appendChild(parrafoEstacion);
            divCarta.appendChild(parrafoFecha);
            divCarta.appendChild(parrafoParticulas);
            
  
          
            divPrincipal.appendChild(divCarta);
      }
     
      })
     
      
}

function spinner() {

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

  contenedorSuperior.appendChild(divSpinner);

  setTimeout(() => {
    divSpinner.remove();
  }, 1000);
}


function limpiarHTML(selector) {
  while(selector.firstChild) {
      selector.removeChild(selector.firstChild);
  }
}