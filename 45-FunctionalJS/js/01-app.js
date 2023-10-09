/* 
Conceptos clave de Functional JS
    - Inmutabilidad (los datos no deben modificarse (Usar const casi siempre))
    - Separar funciones de datos
    - First-class functions(Es poder crear funciones que parezcan cualquier como lo es function expresion)
        ejmp: const suma = function(a, b) {
                            return a+b
                            }
                const resultado = suma;
*/

const suma = function(a, b) {
    return a + b
}

const resultado = suma;

console.log(resultado(10 , 20));