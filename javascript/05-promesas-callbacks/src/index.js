//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
//import { buscarHeroe, buscarHeroeAsync } from './js/promesas'

//import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";
import { heroeIfAwait, heroesCiclo } from './js/await'

/**
 * Promesas
 */
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn)

//buscarHeroe('capi').then(heroe => console.log(heroe)); lo mismo console.log
// buscarHeroe('capi')
//     .then(console.log)
//     .catch(console.warn);


// buscarHeroeAsync('iron')
//     .then(console.log)
//     .catch(console.warn);




/**
 * Awaits
 */



/*obtenerHeroesArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
 });*/
/*console.time('await');
    
 obtenerHeroeAwait('capi2').then(heroe => {
    console.log(heroe);

    console.timeEnd('await');
 }).catch(console.warn);
*/
 //console.table(heroes);
 

/**
 * for await, if await 
 */

 heroesCiclo();

 heroeIfAwait('iron');