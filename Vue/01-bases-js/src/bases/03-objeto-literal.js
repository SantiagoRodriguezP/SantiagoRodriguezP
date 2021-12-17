//objeto literal
const persona = {
    nombre:'Tony',
    apellido: 'Starck',
    edad: 45, 
    direccion: {
        ciudad: 'New York',
        zip: 12321
    }
}

//const persona2 = persona;
//romper la referencia, solo modificar persona2, con operador espreat
const persona2 = {...persona}
//Los objetos son pasados por referencia, afecta a persona
persona2.nombre = 'Peter';



console.log(persona);

console.log(persona2);