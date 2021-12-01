import { obtenerChiste } from "./http-provider";

/**
 * Referencias HTML
 */
const body = document.body;
let btnOtro, olList;


const crearChisteHtml = () =>{
    const html = `
    <h1 class="mt-5">Chiste</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    </ol>
    `;

    const divChiste = document.createElement('div');

    divChiste.innerHTML = html;

    body.append(divChiste);
}

const eventos = () =>{
    btnOtro= document.querySelector('button');
    olList = document.querySelector('ol');

    btnOtro.addEventListener('click',async () => {
        btnOtro.disable = true;
        
        pintarChiste(await obtenerChiste());
        btnOtro.disable = false;
    });
}
//{id, value}
const pintarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

export const init = () =>{
    crearChisteHtml();
    eventos();
}