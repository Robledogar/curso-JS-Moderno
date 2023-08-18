// Variables para crear elementos
const divPrincipal = document.createElement('DIV');
divPrincipal.classList.add('flex', 'items-center', 'justify-center', 'flex-col');


document.body.appendChild(divPrincipal);



document.addEventListener('DOMContentLoaded', mostrarContenido);

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



function mostrarContenido() {



const url = `https://api.hearthstonejson.com/v1/121569/esES/cards.collectible.json`

  fetch(url) //Hacemos un llamado
      .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
      
      .then(resultado => funcionResultado(resultado) )//Entonces quiero los resultados          
}

function funcionResultado(datos = []) {
  console.log(datos.length)
  console.log(datos);

  datos.forEach(dato => {
    const{attack, name, health, rarity} = dato;

    if(attack && rarity === 'LEGENDARY') {
          const divCarta = document.createElement('DIV');
          divCarta.classList.add('w-1/2', 'h-32', 'rounded-md', 'shadow-md', 'bg-gray-100', 'm-4', 'p-2', 'flex', 'items-center', 'justify-center', 'flex-col');

          const parrafoNombre = document.createElement('P');
          parrafoNombre.classList.add('text-blue-500', 'uppercase', 'text-xl')
          parrafoNombre.textContent = name;

          const parrafoAtaque = document.createElement('P');
          parrafoAtaque.textContent = `Ataque: ${attack}`;

          const parrafoSalud = document.createElement('P');
          parrafoSalud.textContent = `Salud: ${health}`;

          const parrafoRareza = document.createElement('P');
          parrafoRareza.classList.add('text-red-500');
          parrafoRareza.textContent = rarity;

          divCarta.appendChild(parrafoNombre);
          divCarta.appendChild(parrafoAtaque);
          divCarta.appendChild(parrafoSalud);
          divCarta.appendChild(parrafoRareza);

        
          divPrincipal.appendChild(divCarta);
          
        }
    })

        const cantidadHijos = divPrincipal.getElementsByTagName('p')

        console.log(`El número de resultados es: ${cantidadHijos.length}`);

    
    
}


// DATOS DEL GOBIERNO
// https://opendata.gijon.es/descargar.php?id=944&tipo=JSON


