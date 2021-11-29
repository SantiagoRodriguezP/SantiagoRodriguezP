class Persona {

    static proObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor (nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);

    
    }
}
const   nombre1 = 'Melisa',
        appelido1 = 'Robles',
        pais1 = 'Colombia';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, appelido1, pais1);
const persona2 =   Persona.proObjeto(fher);

persona1.getInfo();
persona2.getInfo();

