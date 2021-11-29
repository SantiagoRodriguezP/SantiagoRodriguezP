//Instancia única de mi clase
class Singleton {
    static instancia; //undefined
    nombre = '';

    constructor(nombre='') {
        console.log(Singleton.instancia);
         if( !!Singleton.instancia){
            return Singleton.instancia;
         }

        Singleton.instancia = this;
        this.nombre = nombre;

      //  return this;
    }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Pepinillo Rick");
const instancia3 = new Singleton("Morty");

console.log(`Nombre de la instancia es : ${instancia1.nombre}`);
console.log(`Nombre de la instancia es : ${instancia2.nombre}`);
console.log(`Nombre de la instancia es : ${instancia3.nombre}`);