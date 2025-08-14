//"Retrasar ejecución de un mensaje - Crea una función que imprima un mensaje después de un tiempo definido por el usuario. (Tipo de función: Función anónima con setTimeout)"
let tiempoDefinidoUsuario = 2000;
setTimeout(function()  {
    console.log("Hola después de " + tiempoDefinidoUsuario / 1000 + " segundos");
}, tiempoDefinidoUsuario);

// Ejemplo de uso
console.log("Mensaje programado para ser impreso después de " + tiempoDefinidoUsuario / 1000 + " segundos");