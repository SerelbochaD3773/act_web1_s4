//Contar vocales en una cadena - Crea una función que cuente las vocales (a, e, i, o, u) en una cadena. (Tipo de función: Función recursiva)
function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    if (cadena.length === 0) return 0;
    const esVocal = vocales.includes(cadena[0]);
    return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}
console.log(contarVocales("Hola Mundo")); // Resultado: 4
