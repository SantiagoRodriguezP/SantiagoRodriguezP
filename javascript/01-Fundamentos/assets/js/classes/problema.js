const fher = {
    nombre:'Fernando',
    edad:30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}
const pedro = {
    nombre:'Pedro',
    edad:20
}
const melissa = {
    nombre:'Pedro',
    edad:20
}
//fher.imprimir() ;
function Persona(nombre, edad) {
    console.log('Estoy ejecutandome');
   
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}

//Nueva instancia de persona
const maria = new Persona('Maria', 18);
const melisa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melisa.imprimir();