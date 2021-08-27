// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// ref: https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f
// FIND
import  heroes , {owners} from '../data/heroes';

//console.log('Heores', heroes);
//console.log('Owners', owners);


export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);
//console.log(getHeroeById(2));

// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// FILTER
export const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

//console.log(getHeroeByOwner('DC'));

