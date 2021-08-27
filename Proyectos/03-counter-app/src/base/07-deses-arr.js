// Desestructuración Arreglos
// Asignacion Destructurante
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const personajes = ['Goku', 'Vegeta', 'Trunks']
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Cambiar por
// obtener solo a GOku
const [p1] = personajes
console.log(p1);
// obtener solo a trunks
const [, , q1] = personajes
console.log(q1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Ejercicio
// const userState = (valor) => {
//     return [valor, () => {
//         console.log('Hola mundo.');
//     }];
// };

// const arr= userState('Cristian');
// console.log(arr)

// Migrado
const usState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo.');
    }];
};

const [nombre, setNombre] = usState('Cristian');
console.log(nombre)
setNombre();