import { subirImagenes } from "./http-provider";

const body = document.body;
let inputFile, imgfoto;

const crearInputFileHtml = () =>{
    const html = `
        <h1 class="mt-5">Subir archvos</h1>
        <hr>
        <label>Selecciona una imagén:</label>
        <input type="file" accept="image/png, image/jpeg">
        <br>
        <img id="img" class="img-thumbail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgfoto = document.querySelector('#img');

}


const eventos = () =>{
    inputFile.addEventListener('change', (event) =>{
        const file = event.target.files[0];
        console.log(file);
        subirImagenes(file).then(url => imgfoto.src=url);
    });
}


export const init = () =>{
    crearInputFileHtml();
    eventos();
}