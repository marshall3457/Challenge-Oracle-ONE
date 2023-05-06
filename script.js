var textareaElement = document.getElementById("mensaje");
var desencriptar = document.getElementById("desencriptar");
var encriptar  = document.getElementById("encriptador");
textareaElement = "Agregando texto de prueba";

function encriptarTexto(){
    let textoEncriptado = "";
    for(let i = 0; i <= textareaElement.length; i++){
        let caracter = textareaElement.charAt(i);
        switch(caracter){
            case "a":
                textoEncriptado += "enter";
                break;
            case "e":
                textoEncriptado += "imes";
                break;
            case "i":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += caracter;
                break;
        }
    }
    console.log(textoEncriptado);
}

encriptar.addEventListener("click",encriptarTexto);
