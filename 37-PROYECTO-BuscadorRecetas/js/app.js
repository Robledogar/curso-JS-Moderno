function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);

    const resultado = document.querySelector('#resultado');


    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

        fetch(url) //Hacemos un llamado
            .then (respuesta => respuesta.json() )//Entonces quiero una respuesta de tipo json
            
            .then(resultado => mostrarCategorias(resultado.categories) )//Entonces quiero los resultados          
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach( categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('OPTION'); //Se recomienda que esté en mayusculas al crear un elemento
            option.value = strCategory
            option.textContent = (strCategory);
            selectCategorias.appendChild(option);
        })

    }

    function seleccionarCategoria(e) {
        // console.log(e.target.value); //forma para leer el contenido de lo que está disparando un evento
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals))

    }

    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultado.appendChild(heading);

        // Iterar los resultados
        recetas.forEach(receta => {

            console.log(receta);

            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal";
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal);
            }


            //Inyectar en el html
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);



            
        })
    }

    function seleccionarReceta(id) {
        const url = ` https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta) {
        
    }

    function limpiarHTML(selector) {
        while(selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp);