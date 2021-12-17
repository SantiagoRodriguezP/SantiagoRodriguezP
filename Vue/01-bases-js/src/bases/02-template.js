

// Template literals
const nombre = 'Santiago'
apellido = 'Rodriguez'
const nombreCompleto =` ${nombre}  ${apellido}`

//console.log( `Resultado: ${1+1}`);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`${getSaludo(nombre)}`);