// Saludar con nombre por defecto - Crea una función que salude a una persona por su nombre. Si no se proporciona un nombre, usa 'Invitado'. (Tipo de función: Expresión de función)
let nombre = 'Marcos';
const saludar = function(nombre = 'Invitado') {
    return `¡Hola, ${nombre} que mas pues parcero!`;
};
console.log(saludar(nombre));
console.log(saludar());
