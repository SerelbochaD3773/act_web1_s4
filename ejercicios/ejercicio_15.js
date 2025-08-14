//"Invertir una cadena - Crea una función que invierta una cadena de texto. (Tipo de función: Función recursiva)"
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    }
    return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
}

// Ejemplo de uso
console.log(invertirCadena("Hola mundo")); // Resultado: "odnum aloH"
