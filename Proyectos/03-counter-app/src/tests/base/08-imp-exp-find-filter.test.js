import { getHeroeById, getHeroeByOwner } from '../../base/08-imp-exp-find-filter'
import heroes from '../../data/heroes'
describe('Pruebas con las funciones de héroes', () => {
    test('debe retornar un héroe por Id ', () => {
        const idTest = 1;

        const heroe = getHeroeById(idTest);

        const heroeData = heroes.find(h => h.id === idTest);

        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefined si el hereo no existe ', () => {
        const idTest = 100;
        const heroe = getHeroeById(idTest);
        expect(heroe).toBe(undefined);
    });

    test('debe retornar el listado de los heroes de DC ', () => {
        const owner = 'DC';
        const heroes = getHeroeByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);
    });

    test('debe retornar el listado de los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroeByOwner(owner);
        expect(heroes.length).toBe(2);
    });
});
