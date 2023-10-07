function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}


// Async await
async function ejecutar() { // La función padre tiene que tener el async y la función hijo el await
    try {
        console.log(1+1);
       const respuesta = await descargarClientes(); //Detenemos lo siguiente hasta que tengamos resultado de esta función (el promise)

       console.log(2+2);

       console.log(respuesta);

    } catch (error) {
        console.log(error);
    }
}

ejecutar();