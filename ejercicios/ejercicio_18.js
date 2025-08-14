//"Validar correo electrónico - Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com). (Tipo de función: Declaración de función)"
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.com$/;
    return regex.test(email);
}

// Ejemplo de uso
console.log(validarEmail("usuario@ejemplo.com")); // Resultado: true
console.log(validarEmail("usuarioejemplo.org")); // Resultado: false
console.log(validarEmail("usuario@ejemplo")); // Resultado: false