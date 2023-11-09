import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res) => {//req lo que enviamos y res lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    //Consultar BD
    const viajes = await Viaje.findAll();
    

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes,

    });
};

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: {slug} });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}