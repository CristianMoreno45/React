
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import { getHeroeById } from './bases/08-imp-exp-find-filter'
import heroes from './data/heroes';

// const promesa = new Promise( (resolve, reject)=>{
//     setTimeout(() => {
//         const heroe = getHeroeById(100);
//         if(heroe!== undefined) resolve(heroe);
//         reject('No se pudo encontrar al héroe');
//     }, 2000);

// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err=>{ console.warn(err);})
// ;

// Promesas con envio de parametros

const getHeroByIdAsyn = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) resolve(heroe);
            reject('No se pudo encontrar al héroe');
        }, 2000);

    });
};

getHeroByIdAsyn(4)
    .then(console.log)
    .catch(console.warn);