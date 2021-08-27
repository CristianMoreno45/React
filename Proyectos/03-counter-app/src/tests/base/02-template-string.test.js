import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string'
describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Cristian!', () => {
       const nombre = 'Cristian'
       
       const saludo = getSaludo(nombre);

       expect(saludo).toBe('Hola ' + nombre + '!')
    })
    test('getSaludo Sin parametros debe de retornar Hola Carlos!', () => {
       
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!')
     })
    
})
