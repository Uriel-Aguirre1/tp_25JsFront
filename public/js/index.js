const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const main = $('mainContainer');
const subtitulo = qs('.subtitulo');
const parrafos = qsa('p');
const listado = qs('h2 a');

let nombre = prompt('¿Cual es tu nombre?');

subtitulo.textContent += nombre ? nombre : "Invitado";

subtitulo.style.textTransform = "uppercase";
listado.style.color = "##E51B3E"
main.style.display = "block"

let respuesta =confirm('¿Quieres cambiar el fondo?');

if (respuesta) {
    qs('body').classList.add('fondo')
}
 parrafos.forEach((parrafo, index) => {
    if (index%2 === 0) {
        parrafo.classList.add('destacadoImpar')
    } else {
        parrafo.classList.add('destacadoPar')
    }
 });
