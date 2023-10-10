// Coercion es conversion automatica o implicita de valores de un tipo dado a otro

const numero1 = 20;
const numero2 = '40';

console.log(numero1 + numero2); // La salida será un string (color negro) (coercion inplícita (lo hace el propio JavaScript))

// Coerción explícita
console.log(Number(numero2));


console.log(numero1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));