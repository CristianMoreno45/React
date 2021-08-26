// Desestructuración
// Asignacion Destructurante
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//en lugar de ...
console.log(persona.nombre);
console.log(persona.edad);
// usar 
const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

// Como se usa en funciones
const retornarPersona = (persona) => {
    const { nombre } = persona;
    console.log(nombre);
}
retornarPersona(persona);

// optimizado
const retornarPersona2 = ({ nombre, rango = 'Capitán' }) => {
    console.log(nombre, rango);
}
retornarPersona2(persona);

// ejercicio
// dessetructure
const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}

const { nombreClave, anios } = useContext(persona);
console.log(nombreClave, anios);

// objetos complejos o anidada
const useContext2 = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        clave: clave,
        latlng : {
            lat: 21.2324,
            lng: -12.43354
        }
    }
}

const { clave, latlng: {lat}  } = useContext2(persona);
console.log(clave, lat);