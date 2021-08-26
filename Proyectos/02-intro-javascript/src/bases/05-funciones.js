
// uso incorrecto
// function saludar(nombre) {
//     return `Hola, soy ${nombre}`;
// }

// uso correcto de una funcion, impide la sobreescritura
const saludar = function (nombre) {
    return `Hola, soy ${nombre}`;
}

// Arrow function forma larga cuando solo tiene un parametro
const saludar2 = (nombre) => {
    return `Hola, soy ${nombre}`;
}

// Arrow function forma corta  cuando solo tiene un parametro
const saludar3 = (nombre) => `Hola, soy ${nombre}`;


// Arrow function forma corta  cuando no tiene parametros
const saludar4 = () => `Hola, mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));
console.log(saludar4());

// Funciones  con objetos explicitos
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'EL papi1502'
    };
}
console.log(getUser);
// objeto implicito
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'EL papi1502'
});

console.log(getUser2);
// ejercicio mifrar a arrow function

function getUsusarioActivo(nombre) {
    return {
        id: 'ABC567',
        username: nombre
    }
};

// solucion

const getUsusarioActivo2 = (nombre) => ({
    id: 'ABC567',
    username: nombre
});
console.log(getUsusarioActivo2('Cristian'));

