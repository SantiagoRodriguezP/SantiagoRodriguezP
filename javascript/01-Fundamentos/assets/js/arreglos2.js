let juegos = ['Zelda', 'Mario', 'Valorant', 'Pepsiman'];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];

console.log(primero);
console.log(ultimo);

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});
//Agregar nuevo elemento
let nuevaLgth = juegos.push('F-Zero');
console.log({ nuevaLgth, juegos });

//Nuevo elemento al inicio
nuevaLgth = juegos.unshift('GTA V');
console.log({ nuevaLgth, juegos });

//Borrar un elem...
let jueboBorrado = juegos.pop();
console.log({ jueboBorrado, juegos });

//Borrar un elemento en part...
let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Valorant');

console.log({metroidIndex});



