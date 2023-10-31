// const express = require('express'); Se eliminó en el curso porque es lo mismo que el import (aunque hay que poner type module en el package.json)
import express from 'express';

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {//req lo que enviamos y res lo que express nos responde
    // res.send('Hola mundo')
    // res.json({
    //     id: 1,
    //     nombre: 'Jose'
    // });

    res.send('Inicio');
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
    res.send('Contacto');
});


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

// npm run dev (en el terminal para iniciarlo)
// ctrl + C para detenerlo 