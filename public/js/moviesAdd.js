window.onload = function() {
    const qs = (element) => document.querySelector(element);
    const qsa = (element) => document.querySelectorAll(element);
    const $ = (element) => document.getElementById(element);
    
    const formulario = $('formulario');
    const articulo = $('articulo');
    const titulo = qs('h1');
    
    titulo.innerText += 'AGREGAR PELÍCULAS';
    titulo.classList.add('titulo');
    titulo.classList.add('fondoTransparente');
    titulo.classList.add('fondoCRUD');    
}
