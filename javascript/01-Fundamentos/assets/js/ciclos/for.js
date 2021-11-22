const heroes = ['Batman', 'Superman', 'Acuaman','Mujer maravilla'];


console.warn('For tradicional');
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}
//Maneja la condición 
console.warn('For in');
for(let i in heroes){   
    console.log(heroes[i]);
}
//Extrae el valor de arreglo y lo regresa en la var heroe.
console.warn('For of');
for(let heroe of heroes){
    console.log(heroe);
}