import { getHeroByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';
import heores from '../../data/heroes'

describe('Pruebas con promesas', () => {
    test('debe retornar un héroe async ', ( done ) => {
        const id = 1;

        const hero = getHeroByIdAsync(id)
        .then(heroe => {
            expect(heroe).toEqual(heroes[0]);
            done();
        });

    });

    test('Si no existe el héroe, debe retornar el mensaje de error No se pudo encontrar al héroe', ( done ) => {
        const errorExpected = 'No se pudo encontrar al héroe';
        const id = 100;
        const hero = getHeroByIdAsync(id)
        .catch(error => {
            expect(error).toBe(errorExpected);
            done();
        });

    });

    

});
