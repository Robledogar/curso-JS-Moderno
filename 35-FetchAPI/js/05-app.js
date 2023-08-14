document.addEventListener('DOMContentLoaded', obtenerDatos);

async function obtenerDatos() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66f5854ed1msh082dfe15df8bad0p118981jsn61ea14f10dac',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    const contenido = document.querySelector('.contenido');

    let html = '';

    result.forEach(juego => {
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