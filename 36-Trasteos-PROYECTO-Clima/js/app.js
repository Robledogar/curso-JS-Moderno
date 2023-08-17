// Variables para crear elementos
const divPrincipal = document.createElement('DIV');
divPrincipal.classList.add("border", "border-gray-300", "p-4", 'm-16', "h-auto", "mx-auto", 'text-center');


document.body.appendChild(divPrincipal);



document.addEventListener('DOMContentLoaded', mostrarContenido);

function mostrarContenido() {
  //API Openweather
  // const appId = 'bca3a832aafe51e36364aa79f14bd713';
  // const ciudad = 'Zocca';
  // const pais = 'IT'
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
const numeroResultados = 50;
const url = `https://api.disneyapi.dev/character?page=1&pageSize=${numeroResultados}`

  fetch(url) //Hacemos un llamado
      .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
      
      .then(resultado => funcionResultado(resultado.data) )//Entonces quiero los resultados          
}

function funcionResultado(datos = []) {
  console.log(datos.length)
  console.log(datos);
  datos.forEach(dato => {
    const{_id, name, films} = dato;

    // console.log(films);

    const parrafoNombre = document.createElement('P');
    parrafoNombre.textContent = name;
    

    divPrincipal.appendChild(parrafoNombre);
    
  })
  

  

 
  // console.log(datos)
  

}