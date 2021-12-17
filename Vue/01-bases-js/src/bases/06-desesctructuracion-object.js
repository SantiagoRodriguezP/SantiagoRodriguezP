const person = {
    name: 'Tony',
    edad: 45,
    codeName: 'Ironman'
}

const { name, edad, codeName } = person

console.log(name);
console.log(edad);
//return implicito
const createHero = ({name, edad, codeName, power}) => ({id:123321,name,edad, codeName,power})
console.log(createHero(person));