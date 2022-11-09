window.onload = function() {
const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const body = qs('body');
const titulo = qs('h1');

let modoOsucro = confirm('¿Desea modo oscuro?');
if (modoOsucro) {
    qs('body').classList.add('fondoMoviesList'),
    body.style.backgroundColor = "#7f7f7f"
}

titulo.style.padding = "20px";
titulo.style.backgroundColor = "teal";
titulo.style.color = "##E51B3E";

titulo.innerText += 'LISTADO DE PELÍCULAS';
}
