function descargarNuevosClientes() {
    return new Promise (resolve => {
        console.log('Descargando clientes... ');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}


function descargarNuevosPedidos() {
    return new Promise (resolve => {
        console.log('Descargando pedidos... ');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}

const app = async () => {
    try{
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);
                                                                    // Esta forma es incorrecta ya que descarga "En serie" y tardaría más de lo necesario
        // const Pedidos = await descargarNuevosPedidos();
        // console.log(Pedidos);

        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]); // De esta manera la descarga sería "En paralelo"
        console.log(respuesta[0])
        console.log(respuesta[1])

    } catch (error){
        console.log(error);
    }
}

app();