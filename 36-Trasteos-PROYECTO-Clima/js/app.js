const contenedorRespuesta = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', mostrarEnConsola);

function mostrarEnConsola() {
  const appId = 'bca3a832aafe51e36364aa79f14bd713';
  const ciudad = 'Zocca';
  const pais = 'IT'


  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  const url = `https://api.disneyapi.dev/character`

  fetch(url) //Hacemos un llamado
      .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
      
      .then(resultado => funcionResultado(resultado) )//Entonces quiero los resultados          
}

function funcionResultado(datos) {
  

  console.log(datos)

}