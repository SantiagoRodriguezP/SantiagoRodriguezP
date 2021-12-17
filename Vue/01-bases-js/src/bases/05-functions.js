/*function saludar(xyz){
    return  `Hola ${xyz}`
}
const saludar = saludar = (xyz) =>{
    return  `Hola ${xyz}`
}
*/
const saludar = (nombre = 'Peter') => `Hola ${nombre}`

const nombre = 'Peter'

console.log(saludar(nombre));


/*const getUser = () =>{
    return {
        uid:'ABC12',
        username: 'Tony12'
    }
}
console.log(getUser());
*/
const getUser = () => ({
    uid: 'ABC12',
    username: 'Tony12'
})

const heroes = [{
    id: 1,
    name: 'Batman'
}, {
    id: 2,
    name: 'Superman'
}]

//const existe = heroes.some((heroe) => heroe.id === 1)
const {name, id} = heroes.find((heroe) => heroe.id === 1)
console.log(name, id);