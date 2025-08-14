//"Calcular factorial - Crea una función que calcule el factorial de un número. (Tipo de función: Función recursiva)"
const calcularFactorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Ejemplo de uso
console.log(calcularFactorial(5)); // Resultado: 120
