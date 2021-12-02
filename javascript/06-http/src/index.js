//import { init } from "./js/chistes-page";
//import { init } from "./js/usuarios-page";
//import { obtenerChiste, obtenerUsuarios } from "./js/http-provider";
//import * as CRUD from './js/crud-provider'
import { init }  from './js/archivos-page'


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

    
    /**
     * Usuarios
     */
    //init();

    //obtenerUsuarios().then(console.log);


    /**
     * CRUD JS
     */
/*CRUD.getUsuario(2).then(console.log);

CRUD.createUsuario({
    name: 'Santiago', 
    job: 'Desarrollador'
}).then(console.log);

CRUD.updateUsuario(1, {
    name: 'Angie', 
    job: 'Assitant'
}).then(console.log);

CRUD.deleteUsuario(1).then(console.warn);*/

init();