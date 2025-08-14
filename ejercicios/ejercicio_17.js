//"Ejecutar operación personalizada - Crea una función que reciba dos números y una función callback para realizar una operación. (Tipo de función: Función de orden superior)"
const ejecutarOperacion = (num1, num2, callback) => {
    return callback(num1, num2);
}

// Ejemplo de uso
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

console.log(ejecutarOperacion(5, 3, suma)); // Resultado: 8
console.log(ejecutarOperacion(5, 3, resta)); // Resultado: 2
