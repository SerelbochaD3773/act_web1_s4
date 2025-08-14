//"Reemplazar espacios por guiones - Crea una función que reemplace los espacios en una cadena por guiones. (Tipo de función: Expresión de función)",
const reemplazarEspacios = function(cadena) {
    return cadena.replace(/ /g, "-");
}

// Ejemplo de uso
console.log(reemplazarEspacios("Hola mundo bello")); // Resultado: "Hola-mundo-bello"
