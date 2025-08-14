//Filtrar números mayores a 10 - Crea una función que reciba un arreglo y devuelva solo los números mayores a 10. (Tipo de función: Función de orden superior)
const filtrarMayoresA10 = (array) => {
    return array.filter(num => num > 10);
}

// Ejemplo de uso
let numeros = [5, 12, 8, 20, 3];
console.log(filtrarMayoresA10(numeros)); // Resultado: [12, 20]