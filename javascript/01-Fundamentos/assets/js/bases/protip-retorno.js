// function crearPersona(nombre, apellido){
//     return { nombre,  apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })


const persona = crearPersona('Santiago', 'Rodriguez');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

// ...  Parametro rest, crea un ARRAY, no puede haber nada más despues de ...
const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

const [casados, vivo, nombre, saludo] = imprimeArgumentos2(10, true, 'Santiago', false, 'Hola')
console.log({ casados, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Angie', 'Pulido');

console.log(nuevoApellido);



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster',],

};

// const imprimePropiedades = (personaje) =>{

//     console.log(personaje.nombre)
//     console.log(personaje.codeName)
//     console.log(personaje.edad)
//     console.log(personaje.trajes)


// }

const imprimePropiedades = ({ nombre, codeName, edad = 15, trajes }) => {

    console.log({ nombre });
    console.log({ codeName });
    console.log({ edad });
    console.log({ trajes });

}

imprimePropiedades(tony);