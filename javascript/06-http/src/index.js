import { init } from "./js/chistes-page";
import { obtenerChiste, obtenerUsuarios } from "./js/http-provider";

/**
 * Petición Http - fetch - Get
 */
/*const jokeUrl='https://api.chucknorris.io/jokes/random';
fetch(jokeUrl).then(resp =>{
    resp.json().then(({id, value}) =>{
        console.log(id, value);
    })
    
});*/

/*fetch(jokeUrl)
    .then( resp=> resp.json())
    .then(console.log)*/


    //obtenerChiste().then(console.log);

    //init();


    obtenerUsuarios().then(console.log);