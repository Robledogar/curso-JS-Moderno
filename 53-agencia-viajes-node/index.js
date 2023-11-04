// const express = require('express'); Se eliminó en el curso porque es lo mismo que el import (aunque hay que poner type module en el package.json)
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    
     return next();
});


//Definir la carpeta public
app.use(express.static('public'));

//Agregar router
app.use('/', router);




app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

// npm run dev (en el terminal para iniciarlo)
// ctrl + C para detenerlo 