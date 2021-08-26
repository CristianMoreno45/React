

const activo = true;
// Modo tradicional
// let mensaje  = '';
// if(activo){
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'
// }
// console.log(mensaje);

// Modo resumido
const mensaje = (activo) ? 'Activo' : 'Inactivo'
console.log(mensaje);
// Modo resumido sin hacer algo en el else
const mensaje2 = (activo) && 'Activo' ;
console.log(mensaje2);