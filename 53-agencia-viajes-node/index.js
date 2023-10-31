// const express = require('express'); Se eliminó en el curso porque es lo mismo que el import (aunque hay que poner type module en el package.json)
import express from 'express';
import router from './routes/index.js';

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;


//Agregar router
app.use('/', router);

//Habilitar PUG
app.set('view engine', 'pug');


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

// npm run dev (en el terminal para iniciarlo)
// ctrl + C para detenerlo 