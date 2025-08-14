//"Crear un contador privado - Crea una función que devuelva otra función para contar incrementos, manteniendo el contador privado. (Tipo de función: IIFE con closure)"
const crearContador = () => {
    let contador = 0;
    return () => {
        contador++;
        console.log(contador);
    }
}

// Ejemplo de uso
const contador = crearContador();
contador(); // Resultado: 1
contador(); // Resultado: 2
contador(); // Resultado: 3
