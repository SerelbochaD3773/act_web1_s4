// Sumar elementos de un arreglo - Crea una función que sume todos los números de un arreglo. (Tipo de función: Función flecha)

const sumarArray = (array) => {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 12];
console.log(sumarArray(numeros)); // Resultado: 27