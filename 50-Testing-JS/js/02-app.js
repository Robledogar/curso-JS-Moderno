// Probar 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(1, 2);
let esperado = 4;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

resultado = restar(10, 5);
esperado = 6;

expected(esperado).toBe(resultado);



function expected(esperado) {
    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} NO es igual a lo esperado`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        }
    }
}