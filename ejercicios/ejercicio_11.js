//"Verificar si un número es par - Crea una función que determine si un número es par. (Tipo de función: Declaración de función)"

let numero;
function esPar(numero) {
    return numero % 2 === 0;
}

// Ejemplo de uso
console.log(esPar(4)); // Resultado: true
console.log(esPar(7)); // Resultado: false
