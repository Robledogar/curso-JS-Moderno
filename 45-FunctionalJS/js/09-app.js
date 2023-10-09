// Curring es dividir una función que toma más de un parámetro, en argumentos de forma parcial

const suma = (a,b,c) => a + b + c;

// const parcial = (a) => (b,c) => suma (a,b,c);

// const primerNumero = parcial(5);
// const resultado = primerNumero(4,3)

// console.log(resultado);

const parcial = a => b => c => suma(a,b,c);
// const primerNumero = parcial (5);
// const segundoNumero = primerNumero(4);
// const resultado = segundoNumero(3);
//Lo mismo que:
const resultadoParcial = parcial(5)(4)(3);

console.log(resultadoParcial);