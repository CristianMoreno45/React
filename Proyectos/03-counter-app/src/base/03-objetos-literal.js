const persona = {
    nombre: 'Tony',
    apellidos: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55311254,
        lat: 14.124124,
        lng: 34.9124
    }
}

console.table( persona );
const persona2 = {...persona}
persona2.nombre = 'Peter'
console.log (persona);
console.log (persona2);