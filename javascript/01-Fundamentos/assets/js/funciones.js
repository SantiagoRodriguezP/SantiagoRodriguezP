function saludar(nombre){
    //console.log('Hola ' +nombre);
    return [1,2]; 

    //Esto no se va a  ejecutar
    console.log("Codigo despues del return");
}

//Función Anonima
const saludar2 = function(nombre){
    //console.log('Hola ' + nombre);
  //  console.log(arguments);
}

//funciones de flecha
const saludarFlecha = () => {
    console.log("Hola flecha");
}

const saludarFlecha2 = (nombre) => {
    console.log("Hola " + nombre);
}


const retornoSaludar = saludar("Santiago");
//console.log(retornoSaludar[0], retornoSaludar[1]);


//saludar2('Alberto', 21, false, 'Colombia');

//saludarFlecha();
//saludarFlecha2('Andrea');


function sumar(a, b){
    return a + b;
    
}

// const sumar2 = (a,b) =>
// {
//     return a +b;
// }
// Solo para retornar una linea
const sumar2 = (a,b) =>  a + b;

function getAleatorio(){
    return Math.random();
}

// Función de flecha que no tenga llaves
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());