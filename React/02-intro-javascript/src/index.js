const nombre = 'Santiago';
const apellido = 'Rodriguez';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} 
${apellido}`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola Mundo'
}

console.log(`Hola Bro: ${getSaludo()}`)