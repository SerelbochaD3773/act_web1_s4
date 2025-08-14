//"Generar un ID único - Crea una función que genere un ID único basado en un contador interno. (Tipo de función: IIFE con closure)"
function generarIDUnico() {
    let contador = 0;
    return function() {
        contador++;
        return `id_${contador}`;
    }
}

// Ejemplo de uso
const idUnico = generarIDUnico();
console.log(idUnico()); // Resultado: "id_1"
console.log(idUnico()); // Resultado: "id_2"
console.log(idUnico()); // Resultado: "id_3"
console.log(idUnico()); // Resultado: "id_4"
