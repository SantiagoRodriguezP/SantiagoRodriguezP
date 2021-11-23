//Función anonima
const miModulo=(() => {
    'use strict'

    let deck = [];
    const   tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores =[];

    // Referencias del HTML
    const   btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo = document.querySelector('#btnNuevo');

    const   divCartasJugadores = document.querySelectorAll(".divCartas"),
            puntosEnPantalla = document.querySelectorAll("small");

    //Esta función crea una nueva baraja
    const crearDeak = () => {

        deck=[];
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
        return _.shuffle(deck);
    }

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeak();

        puntosJugadores=[];
        for(let i=0; i< numJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosEnPantalla.forEach( elem => elem.innerText=0);
        divCartasJugadores.forEach(elem => elem.innerHTML='');
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    //Esta función me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop(); // remueve el elemento y lo retorna
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1
    }
    //Turno: 0 = Primer jugador, último es el computador
    const acumularPuntos =  (carta,turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosEnPantalla[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta,turno) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }
    const determinarGanador = () =>{

        const [ puntosMinimos,puntosComputador ] = puntosJugadores;

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
        }, 100);
    }
    // Turno de computador
    const turnoComputador = (puntosMinimos) => {
        let puntosComputador =0;
        do {
            const carta = pedirCarta();
            puntosComputador = acumularPuntos(carta,puntosJugadores.length-1);
           
            crearCarta(carta,puntosJugadores.length-1);

        } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

    }

    // Eventos; Callback, función que se pasa como argumento

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

         crearCarta(carta,0);

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
        turnoComputador(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });
    return {
        nuevoJuego:inicializarJuego   
    }
})();
