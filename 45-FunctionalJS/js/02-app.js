const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(10, 20);

// Sería lo mismo que la de arriba
// function sumarOMultiplicar(fn) {
//     const [a, b] = [10, 20];
//     return fn(a, b);
//   }

console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));
