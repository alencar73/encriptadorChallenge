let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector(".contenedormunieco");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    if (cajatexto) {
        resultado.textContent = encriptarTexto(cajatexto);
    }
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    if (cajatexto) {
        resultado.textContent = desencriptarTexto(cajatexto);
    }
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".cajatexto");
    let texto = cajatexto.value;

    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return "";
    }

    return normalizeText(texto);
}

function validarTexto(texto) {
    let regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

let btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado");
});
