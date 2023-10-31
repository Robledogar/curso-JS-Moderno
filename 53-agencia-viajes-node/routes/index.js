import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {//req lo que enviamos y res lo que express nos responde
    res.render('inicio');
});

router.get('/nosotros', (req, res) => {

    const viajes = 'Viaje a Alemania';
    res.render('nosotros');
});


export default router;