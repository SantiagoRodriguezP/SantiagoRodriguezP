import { buscarHeroeAsync, buscarHeroe } from './promesas'
const heroesId = ['capi','iron','spider'];
//const heroesPromesas = heroesId.map(id => buscarHeroe(id));
const heroesPromesas = heroesId.map(buscarHeroe);

/**
 * Utilizar el await fuera de un ciclo for
 */
export const obtenerHeroesArr = async() =>{
  
   /* const heroesArr = [];

    for(const id of heroesId){
        // const heroe = await buscarHeroe(id);
        // heroesArr.push(heroe);
        heroesArr.push(buscarHeroe(id));
    }
    
    //return heroesArr;
    return await Promise.all(heroesArr);*/
     //map: barre los elementos internos y regresa un Arr con los valores transformardos
    return await Promise.all(heroesId.map(buscarHeroe));
}

/**
 * 
 * @returns Await debe estar dentro de una función async
 */
export const obtenerHeroeAwait = async(id) => {
    try{
        const heroe =await buscarHeroeAsync(id);
        return heroe;
    }catch(err) {
        console.log('CATCH!!!');
        return{
            nombre: 'Sin nombre',
            poder:'Sin poder'
        }
    }
    
}

export const heroesCiclo = async() =>{
    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }

    //heroesPromesas.forEach( async p => console.log(await p));

    //console.log(heroes);

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id)=>{
    if((await buscarHeroeAsync(id)).nombre==='Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('Que mentira...');
    }
}