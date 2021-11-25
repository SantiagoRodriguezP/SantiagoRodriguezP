class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); //undefined
        console.log('Hola, soy un método estatico');
    }

    //Inicialización propiedades de clase
    nombre = '';
    codigo = '';
    frase = '';
    comida='';
    //Método que se va a ejecutar cuando se instancia Persona
    constructor( nombre='Sin nombre', codigo='Sin  código', frase='No tiene' ) {
        this.nombre = nombre;
        this.codigo=codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de: ${this.nombre} es ${this.comida}`;
    }


    quienSoy(){
        console.log(`Soy ${this.nombre} y mi idenntidad es: ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Santiago', 'Pepinillo Rick', 'Soy un Pepinillooo!');
const ironman = new Persona('Tony', 'Ironman', 'Yo soy el robot :v ');


//console.log(ironman);

spiderman.quienSoy();
//spiderman.miFrase();

spiderman.setComidaFavorita = 'Pie de cereza de la tía May';

//console.log(spiderman);
//console.log(spiderman.getComidaFavorita);
//Persona._conteo = 2
console.log(`Conteo estatico: ${ Persona._conteo}`)
console.log(Persona.conteo);

Persona.mensaje();


Persona.propiedadExterna = 'Hola Santiago ! ';

console.log( Persona.propiedadExterna);