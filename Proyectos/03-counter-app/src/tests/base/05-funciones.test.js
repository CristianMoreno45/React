
import { getUser , getUsusarioActivo} from '../../base/05-funciones'
describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'EL papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('getUsusarioActivo debe de retornar un objeto ', () => {
        
        const nombre = 'Aguila'
        const user = getUsusarioActivo(nombre);

        expect(user)
        .toEqual({
            id: 'ABC567',
            username: nombre
        });

    });


});
