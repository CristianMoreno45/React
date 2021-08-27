

export const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();


const usState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo.');
    }];
};

const [nombre, setNombre] = usState('Cristian');
