/**
 * 2C = Two of Clubs
 * 2D = Two od Diamonds
 * 2H = Twho of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputador = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputador = document.querySelector('#computador-cartas');
const puntosEnPantalla = document.querySelectorAll("small");

//Esta función crea una nueva baraja
const crearDeak = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);

        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeak();

//Esta función me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop(); // remueve el elemento y lo retorna
    return carta;
}

//pedirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1
}

// Turno de computador
const turnoComputador = (puntosMinimos) => {
    do {
        const carta = pedirCarta();

        puntosComputador = puntosComputador + valorCarta(carta);
        puntosEnPantalla[1].innerText = puntosComputador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputador.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputador === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
            alert("Computador gana ;)");
        } else if (puntosComputador > 21) {
            alert("Jugador Gana");
        } else {
            alert("Computador gana");
        }
    }, 10);

}



// Eventos; Callback, función que se pasa como argumento

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosEnPantalla[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn("Perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugador);
    } else if (puntosJugador == 21) {
        console.warn('21, ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugador);
    }
})

btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputador(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    deck = crearDeak();

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosComputador = 0;
    puntosJugador = 0;
    
    puntosEnPantalla[0].innerText = 0;
    puntosEnPantalla[1].innerText = 0;

    divCartasComputador.innerHTML='';
    divCartasJugador.innerHTML='';
    console.clear();

});