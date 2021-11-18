const personaje = {
    nombre: 'Tony Stark',
    codeName:'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat: 34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster',],
    direccion:{
        zip:'10880, 902625',
        ubicacion:'Malibu California'
    },
    'ultima pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre:' , personaje.nombre);
console.log('Nombre:' , personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coordenadas: ', personaje.coords.lat);
console.log('Latitud: ', personaje.coords.lat);

console.log('No. Trajes: ', personaje.trajes.length);
console.log('Último Traje: ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Última pelicula:', personaje["ultima pelicula"]);


delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries(personaje);
console.log(entriesPares);


console.log(personaje);

// Bloquear objeto
Object.freeze(personaje);

personaje.direccion.ubicacion = 'Colombia';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});
//console.log({valores});