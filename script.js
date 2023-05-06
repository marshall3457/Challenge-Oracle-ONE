var textareaElement = document.getElementById("mensaje");
var desencripta = document.getElementById("desencriptar");
var encriptar  = document.getElementById("encriptador");

/* Con este texto si funciona pero alparecer el textareaElement no esta recibiendo nada;
textareaElement = "Agregando texto de prueba";
*/


function encriptarTexto(){
    let textoEncriptado = "";
    let texto = textareaElement.value; // Obtener el valor del elemento de texto
    for(let i = 0; i <= texto.length; i++){
        let caracter = texto.charAt(i);
        switch(caracter){
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
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

encriptar.addEventListener("click",encriptarTexto,false);

function desencriptarTexto(){
    let textoDesencriptado = "";
    let texto = textareaElement.value; // Obtener el valor del elemento de texto encriptado
    for(let i = 0; i <= texto.length; i++){
        let caracter = texto.charAt(i);
        switch(caracter){
            case "a":
                textoDesencriptado += "a";
                i += 1;
                break;
            case "e":
                textoDesencriptado += "e";
                i += 4;
                break;
            case "i":
                textoDesencriptado += "i";
                i += 3;
                break;
            case "o":
                textoDesencriptado += "o";
                i += 3;
                break;
            case "u":
                textoDesencriptado += "u";
                i += 3;
                break;
            default:
                textoDesencriptado += caracter;
                break;
        }
    }
    console.log(textoDesencriptado);
}

desencriptar.addEventListener("click", desencriptarTexto, false);



