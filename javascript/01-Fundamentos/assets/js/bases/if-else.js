let a = 1;
if( a >=10){ // undefined, null,una asignación
    console.log('A es mayor o igual a 10');
}else{
    console.log('A menor a 10');
}
console.log('Fin de programa');

//new: crea una instancia
const hoy = new Date();

let dia = hoy.getDay();
console.log(dia, hoy);

// =: No regresa un boleano,regresa una asignación (0); ==: Importa el tipo de dato;
//===: Devuelve un boleano (true, false);

if(dia === 0){
    console.log('Domingo');
}else if(dia === 1 ){
    console.log('Lunes');
    // if(dia  === 1 ){
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes ni domingo|')
    // }
}else if(dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo');
}



// Sin usar If Else o switch, usar objetos
dia = 6; // 0:Domingo, 1: Lunes...

const diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];


//Día de la semana
console.log( 'Día actual:', diasSemana[dia]);

// Solución Fernando
const diasLetras = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miércoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sábado',
}

console.log(diasLetras[dia] || 'Día no es válido');