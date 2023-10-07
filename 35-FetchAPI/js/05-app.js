document.addEventListener('DOMContentLoaded', obtenerDatos);
const generoAFiltrar = 'Card Game';

async function obtenerDatos() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abc53a0f92msh299d98b1d590ba0p13b940jsn8354fb309e66',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    console.log(result);

    const contenido = document.querySelector('.contenido');

    let html = '';

    const juegosFiltrados = result.filter(juego => juego.genre === generoAFiltrar);

    juegosFiltrados.forEach(juego => {
                const {title, genre, developer, thumbnail, short_description} = juego;
        
                html += `
                    <p>Juego: ${title}</p>
                    <img src="${thumbnail}" alt="">
                    <p>Descripción: ${short_description}</p>
                    <p>Genero: ${genre}</p>
                    <p>Desarrolladora: ${developer}</p>
                    <br><br>
                    
                
                
                `
            })
        
            contenido.innerHTML = html;

	// result.forEach(juego => {
    //     console.log('Nombre:', juego.title);
    //     console.log('Género:', juego.genre);
    //     console.log('Descripción:', juego.short_description);
    //     console.log('Plataformas:', juego.platform);
    //     console.log('Desarrollado por:', juego.developer);
    //     console.log('----------');
    
} catch (error) {
	console.error(error);
}
}


// function mostrarHTML(datos) {
//     const contenido = document.querySelector('.contenido');

//     let html = '';

//     datos.forEach(perfil => {
//         const {author, post_url} = perfil;

//         html += `
//             <p>Author: ${author}</p>
//             <a href="${post_url}" target="_blank">Ver imagen</a>
        
        
//         `
//     })

//     contenido.innerHTML = html;
// }
