/**
 * Días de semana abrimos a las 11
 * Fines semana a las 9
 */
// Entra a un sitio web, para consultar si está abierto hoy

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

if(dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApertura=9;
}else{
    console.log('Día de semana');
    horaApertura=11;
}
if(horaActual >= horaApertura){
    mensaje = 'Está abierto';
}else{
    mensaje ='Está cerrado, hoy abrimos a las' +horaApertura;
}

console.log({horaApertura});