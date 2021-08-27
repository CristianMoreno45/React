// Doc Ref: https://jestjs.io/

describe('Pruebas en el archivo demo.test.js', () => {
        test('Debe ser true ', () => {
                // 1. Inicialización
                const mensaje = 'Hola Mundo';

                // 2. Estimulo 
                // const mensaje2 = "Hola MUndo";
                const mensaje2 = "Hola Mundo";

                // 3. Observar el comportamiento
                expect(mensaje).toBe(mensaje2);
        })
});
