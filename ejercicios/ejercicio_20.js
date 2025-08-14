//s"Calcular promedio de un arreglo - Crea una función que calcule el promedio de un arreglo de números. (Tipo de función: Función flecha)"
const calcularPromedio = (arreglo) => {
    const suma = arreglo.reduce((acc, num) => acc + num, 0);
    return suma / arreglo.length;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(calcularPromedio(numeros)); // Resultado: 3