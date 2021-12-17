const characters = ['Rick', 'Morty', 'Summer', 'Jerry']
//Desestructuracion de arrays
const [r,m,s,j] = characters

console.log(r,m,s,j);

const returnArray = ([letras, numeros]) =>{
    return [letras, numeros];
}

const [letras, numeros] = returnArray(['Letras', 121235]);

console.log(letras, numeros);