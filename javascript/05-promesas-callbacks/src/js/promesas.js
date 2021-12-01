const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Abusarda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Poder con picadura de araña'
    }
}

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(()=> resolve(heroe), 1000)
            
        } else {
            reject(`No existe un heroe con el Id ${id}`);
        }
    });
}

//Async, función asincrona, retorna una promesas
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe) {
        return heroe;
    } else {
        throw `No existe un heroe con el Id ${id}`;
    }
}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});


const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rápida'), 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}