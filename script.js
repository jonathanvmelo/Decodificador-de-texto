let textInput = document.querySelector("#input-texto");
let outInput = document.querySelector("#output");
textInput.focus();

function criptografar() {

    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")


    document.getElementById('output').innerHTML = '<textarea readonly class="input-texto">' + resultCripto +
        '</textarea>' + '<button class="btn-copiar"  onclick="copiar()">Copiar</button>'
}

function descriptografar() {

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly class="input-texto">' + resultDescripto +
        '</textarea>' + '<button class="btn-copiar"  onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
function clean() {

    let clearInput = document.querySelector('#input-texto').value = "";
    textInput.focus();
}