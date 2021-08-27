
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import { getHeroeById } from './08-imp-exp-find-filter'


export const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) resolve(heroe);
            reject('No se pudo encontrar al héroe');
        }, 1500);

    });
};

