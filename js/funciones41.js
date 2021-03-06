///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP III
 * Origin: Capitulo41.html ==> Perfeccionando el ejemplo sencillo
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemOrigen;
var zonaDestino;

elemOrigen = document.getElementById("imagen");
zonaDestino = document.getElementById("zona-destino");


//1.1 Extracción de elementos desde HTML


//2. Definición de Funciones

//Creamos la función comenzarArrastrar y le pasamos el objeto "e"
//que desencadena el evento "dragstart".
function comenzarArrastrar(e) {
    var ruta;
    var codigo;


//Asignamos a la variable ruta el atributo src de la imagen para que tenga
//la ruta automáticamente
    ruta = elemOrigen.getAttribute("src");
    codigo = "<img src='" + ruta + "'>";

//Asignamos al método setData de la propiedad dataTransfer perteneciente al objeto
// "e" del evento desencadenado el formato "Text" a transferir y la ruta completa 
//que en este caso es la variable "codigo"
    e.dataTransfer.setData("Text", codigo);

}

//Definimos la función "entrando" para cuando accedamos a la zona de destino
function entrando(e) {
//Primero reseteamos el comportamiento que tiene por defecto el navegador respecto
//a las funciones de Drag&Drop
    e.preventDefault();
    zonaDestino.style.background="rgba(8,252,25,.8)";
}

//Definimos en "saliendo" el comportamiento cuando se sale de la zona de destino
function saliendo(e) {
//Primero reseteamos el comportamiento que tiene por defecto el navegador respecto
//a las funciones de Drag&Drop
    e.preventDefault();
//Indicamos que en caso de salir de la zona de destino, el fondo vuelva al blanco
    zonaDestino.style.background="#FFFFFF";
}

//Definimos la función "soltado" para cuando hagamos "drop"
function soltado(e) {
//Reseteamos el comportamiento por defecto del navegador para "drop" del objeto
//"e" desencadenado por el evento "dragstart"
    e.preventDefault();
//Le indicamos que cree/asigne el código HTML que rescatamos con el método
//getdata correspondiente a los datos que habíamos indicado que ibamos a
//transferir con setData en la función anterior.
    zonaDestino.innerHTML = e.dataTransfer.getData("Text");
}

function terminado(e) {
    var elemento
//Almacenamos en la variable elemento el objeto target que ha desencadenado el 
//evento e
    elemento = e.target;
//Ocultamos con css
    elemento.style.visibility="hidden";
}


function comenzar() {
// Indicamos que en caso de "dragstart" que llame la función comenzarArrastrar.
    elemOrigen.addEventListener("dragstart",comenzarArrastrar,false);

//Indicamos al navegador que en caso de "dragenter" no haga nada de lo que tiene
// previsto en su programación para este evento.
    zonaDestino.addEventListener("dragenter", entrando,false);

//Indicamos al navegador que en caso de "dragover" no haga nada de lo que tiene
// previsto en su programación para este evento.
    zonaDestino.addEventListener("dragover", function(e){
        e.preventDefault();
    },false);

//Le indicamos al navegador con "dranleave" que si sale de la zona correcta de
//destino que vuelva al color de fondo original
    zonaDestino.addEventListener("dragleave", saliendo, false);

//Indicamos al navegador que en caso de "dragover" no haga nada de lo que tiene
// previsto en su programación para este evento.
    zonaDestino.addEventListener("drop", soltado,false);

//Le indicamos al navegador con "dragend" que cuando terminemos de arrastrar
//nos elimine la foto inicial. Para ello pondremos al elemento de origen a la 
//escucha
    elemOrigen.addEventListener("dragend", terminado, false);

}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
