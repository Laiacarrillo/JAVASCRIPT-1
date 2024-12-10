import mostrarTexto from './mostrartexto.js'
import mostrarJSON from './mostrarJSON.js'

//Accion al boton mostrar texto
const btnMostrartxt = document.getElementById("mostrartxt");
const areaTXT = document.getElementById("contenidotexto");
btnMostrartxt.addEventListener("click", e =>{
    mostrarTexto(areaTXT);
});

//Accion al boton mostrar JSON en la tabla
const btnMostrarJSON = document.getElementById("mostrarjson");
const areaJSON = document.getElementById("datostabla");
btnMostrarJSON.addEventListener("click", e =>{
    mostrarJSON(areaJSON);
});