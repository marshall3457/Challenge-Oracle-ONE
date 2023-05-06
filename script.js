var textareaElement = document.getElementById("mensaje");
var desencriptar = document.getElementById("desencriptar");
var encriptar  = document.getElementById("encriptador");

/* Con este texto si funciona pero alparecer el textareaElement no esta recibiendo nada;
textareaElement = "Agregando texto de prueba";
*/


function encriptarTexto(){
    var textoEncriptado = "";
    var texto = textareaElement.value; // Obtener el valor del elemento de texto
    for(let i = 0; i <= texto.length; i++){
        let caracter = texto.charAt(i);
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
