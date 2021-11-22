const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => miembro ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20, 16));
console.log(tieneMembresia(false));

const amigo =false;
const amigosArr = [
    'Peter',
    'Rick',
    'Tony',
    amigo ? 'Thor': 'Loki',
   // (() => 'Nick Fury')()
   elMayor(10,15)
]

console.log(amigosArr);

const nota=81; 
const grado =   nota >=95 ? 'A+' : 
                nota >=  90 ? 'A' :
                nota > 85 ? 'B+' :
                nota > 80 ? 'B' : 'F';
console.log({ nota, grado })

