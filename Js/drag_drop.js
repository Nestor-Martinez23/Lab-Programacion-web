
var elem_destino;

function comenzar() {
    var imagenes = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes.length; i++) {

        imagenes[i].addEventListener("dragstart", comen_arrastrar, false);
        imagenes[i].addEventListener("dragend", terminado, false);
    }

    elem_destino = document.getElementById("cajadestino1");


    elem_destino.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino.addEventListener("drop", soltado, false);

    elem_destino.addEventListener("dragleave", saliendo, false);

}


function comen_arrastrar(e) {
    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");

    var src = document.getElementById(id).src;

    elem_destino.innerHTML = "<img src='" + src + "'>";


}

function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="#333";
}
function terminado(e) {
    var elemento = e.target;
    elemento.style.visibility = "hidden";
}
window.addEventListener("load", comenzar(), false);
//////////////////////////////////

var elem_destino2;

function comenzar2() {
    var imagenes2 = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes2.length; i++) {

        imagenes2[i].addEventListener("dragstart", comen_arrastrar2, false);
        imagenes2[i].addEventListener("dragend", terminado2, false);
    }

    elem_destino2 = document.getElementById("cajadestino2");


    elem_destino2.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino2.addEventListener("drop", soltado2, false);

    elem_destino2.addEventListener("dragleave", saliendo2, false);

}


function comen_arrastrar2(e) {
    var elemento2 = e.target;

    e.dataTransfer.setData("Text", elemento2.getAttribute("id"));
}
function soltado2(e) {
    e.preventDefault();
    var id2 = e.dataTransfer.getData("Text");

    var src2 = document.getElementById(id2).src;

    elem_destino2.innerHTML = "<img src='" + src2 + "'>";


}

function saliendo2(e){
    e.preventDefault();
    elem_destino2.style.background="#333";
}
function terminado2(e) {
    var elemento2 = e.target;
    elemento2.style.visibility = "hidden";
}

window.addEventListener("load", comenzar2(), false);


//////////////////////////

var elem_destino3;

function comenzar3() {
    var imagenes = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes.length; i++) {

        imagenes[i].addEventListener("dragstart", comen_arrastrar3, false);
        imagenes[i].addEventListener("dragend", terminado3, false);
    }

    elem_destino3 = document.getElementById("cajadestino3");


    elem_destino3.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino3.addEventListener("drop", soltado3, false);

    elem_destino3.addEventListener("dragleave", saliendo3, false);

}


function comen_arrastrar3(e) {
    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado3(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");

    var src = document.getElementById(id).src;

    elem_destino3.innerHTML = "<img src='" + src + "'>";


}

function saliendo3(e){
    e.preventDefault();
    elem_destino3.style.background="#333";
}
function terminado3(e) {
    var elemento = e.target;
    elemento.style.visibility = "hidden";
}

window.addEventListener("load", comenzar3(), false);
//////////////////////////////////
var elem_destino4;

function comenzar4() {
    var imagenes = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes.length; i++) {

        imagenes[i].addEventListener("dragstart", comen_arrastrar4, false);
        imagenes[i].addEventListener("dragend", terminado4, false);
    }

    elem_destino4 = document.getElementById("cajadestino4");


    elem_destino4.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino4.addEventListener("drop", soltado4, false);

    elem_destino4.addEventListener("dragleave", saliendo4, false);

}


function comen_arrastrar4(e) {
    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado4(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");

    var src = document.getElementById(id).src;

    elem_destino4.innerHTML = "<img src='" + src + "'>";


}

function saliendo4(e){
    e.preventDefault();
    elem_destino4.style.background="#333";
}
function terminado4(e) {
    var elemento = e.target;
    elemento.style.visibility = "hidden";
}

window.addEventListener("load", comenzar4(), false);

//////////////////////////////////////////////////////

var elem_destino5;

function comenzar5() {
    var imagenes = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes.length; i++) {

        imagenes[i].addEventListener("dragstart", comen_arrastrar5, false);
        imagenes[i].addEventListener("dragend", terminado5, false);
    }

    elem_destino5 = document.getElementById("cajadestino5");


    elem_destino5.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino5.addEventListener("drop", soltado5, false);

    elem_destino5.addEventListener("dragleave", saliendo5, false);

}


function comen_arrastrar5(e) {
    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado5(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");

    var src = document.getElementById(id).src;

    elem_destino5.innerHTML = "<img src='" + src + "'>";


}

function saliendo5(e){
    e.preventDefault();
    elem_destino5.style.background="#333";
}
function terminado5(e) {
    var elemento = e.target;
    elemento.style.visibility = "hidden";
}

window.addEventListener("load", comenzar5(), false);
//////////////////////////////////////////////////////


var elem_destino6;

function comenzar6() {
    var imagenes = document.querySelectorAll("#cajaimagen img");

    for (var i = 0; i < imagenes.length; i++) {

        imagenes[i].addEventListener("dragstart", comen_arrastrar6, false);
        imagenes[i].addEventListener("dragend", terminado6, false);
    }

    elem_destino6 = document.getElementById("cajadestino6");


    elem_destino6.addEventListener("dragover", function (e) {
        e.preventDefault();}, false);

    elem_destino6.addEventListener("drop", soltado6, false);

    elem_destino6.addEventListener("dragleave", saliendo6, false);

}


function comen_arrastrar6(e) {
    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado6(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");

    var src = document.getElementById(id).src;

    elem_destino6.innerHTML = "<img src='" + src + "'>";


}

function saliendo6(e){
    e.preventDefault();
    elem_destino5.style.background="#333";
}
function terminado6(e) {
    var elemento = e.target;
    elemento.style.visibility = "hidden";
}

window.addEventListener("load", comenzar6(), false);




