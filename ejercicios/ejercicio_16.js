//"Sumar argumentos variables - Crea una función que sume un número variable de argumentos. (Tipo de función: Función flecha con parámetro rest)"
const sumar = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Ejemplo de uso
console.log(sumar(1, 2, 3)); // Resultado: 6
console.log(sumar(5, 10, 15, 20)); // Resultado: 50
