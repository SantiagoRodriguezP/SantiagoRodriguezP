const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    }, 
    iron:{
        nombre:'Ironman',
        poder:'Abusarda cantidad de dinero'
    }, 
    spider:{
        nombre:'Spiderman',
        poder:'Poder con picadura de araña'
    }
}

export const buscarHeroe = (id, callback) =>{
    const heroe = heroes[id];

    if(heroe){
        callback(null,heroe);
    }else{
        //Un error
        callback(`No existe un heroe con el Id ${id}`);
    }
    //callback(heroe);
}