// Funciones puras o pure functions
// Son funciones que retornan un dato pero no modifican los valores de las variables
//Devuelven la misma cantidad de datos que reciben como parámetros (Si toma un parámetro debe devolver un sólo valor)

const duplicar = (numero) => numero * 2;

const numero1 = 20;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);
