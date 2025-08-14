//"Multiplicar elementos de un arreglo - Crea una función que multiplique todos los números de un arreglo. (Tipo de función: Función de orden superior)",
const multiplicarElementos = (arreglo) => {
    return arreglo.reduce((acumulador, elemento) => acumulador * elemento, 1);
}

// Ejemplo de uso
console.log(multiplicarElementos([1, 2, 3, 4])); // Resultado: 24
