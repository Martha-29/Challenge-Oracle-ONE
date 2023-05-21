let text, //container for message
    msj, //container for resulted message
    copyText, // flag for copy
    encrypted = false, //flag to review empty textarea
    invalid_text; //flag to verify if entry is allowed
const copy = document.getElementById('copy'),
    copied = document.getElementById('copied');

function read() {
    text = document.getElementById("texto").value;
    if (text == '') {
        if (encrypted == false) {
            alert("El campo no puede estar vacío, por favor, introduzca el texto a encriptar");

        }
        else {
            text = document.getElementById("resultado").textContent;
        }
    }
    else {
        validar(text);
    }
}

function validar(text) {
    invalid_text = text.includes("A") || text.includes("B") || text.includes("C") || text.includes("D") || text.includes("E") || text.includes("F") || text.includes("G")
        || text.includes("H") || text.includes("I") || text.includes("J") || text.includes("K") || text.includes("L") || text.includes("M") || text.includes("N") || text.includes("O")
        || text.includes("P") || text.includes("Q") || text.includes("R") || text.includes("S") || text.includes("T") || text.includes("U") || text.includes("V") || text.includes("W")
        || text.includes("X") || text.includes("Y") || text.includes("Z") || text.includes("á") || text.includes("é") || text.includes("í") || text.includes("ó") || text.includes("ú")
        || text.includes("Á") || text.includes("É") || text.includes("Í") || text.includes("Ó") || text.includes("Ú");

    if (invalid_text) {
        alert("El campo no puede contener mayúsculas o acentos, por favor, intente de nuevo");
    }
}

function encriptar() {
    read();
    encrypted = true;
    if (invalid_text == false) {
        msj = text.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("resultado").innerHTML = msj;
        document.getElementById('texto').value = ''
        document.getElementById("copy").style.visibility = "visible";
    }
}

function desencriptar() {
    read();
    if (invalid_text == false) {
        msj = text.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("resultado").innerHTML = msj;
        document.getElementById('texto').value = ''
        document.getElementById("copy").style.visibility = "visible";
    }

}

function copiar() {
    copyText = document.querySelector("#resultado").textContent;
    navigator.clipboard.writeText(copyText);
    copied.classList.remove('escondido');
    copy.classList.add('escondido');
    setTimeout(() => {
        copy.classList.remove('escondido')
        copied.classList.add('escondido')
    }, 2000)
}




