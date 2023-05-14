var textareaElement = document.getElementById("mensaje");
var desencripta = document.getElementById("desencriptar");
var encriptar  = document.getElementById("encriptador");
var textoResuelto = document.getElementById("texto-resuelto");
var textoEncriptDesencript= document.getElementById("mensaje-resuelto");
var copiarTexto = document.getElementById("copiar");
var contenedor = document.getElementById("contenedor-resultado");
/* Con este texto si funciona pero alparecer el textareaElement no esta recibiendo nada;
textareaElement = "Agregando texto de prueba";
*/
textoResuelto.style.cursor = "default";
textoResuelto.style.display = "none";

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
                textoEncriptado += caracter; //aqui agrega las letras que no son vocales;
                break;
        }
    }
    
    textoEncriptDesencript.value = textoEncriptado;
    copiarTexto.style.backgroundColor = "#FFFFFF";
    copiarTexto.value = "copiar";

    if(textareaElement.value != ""){
        muneco.style.display = "none"; //tambien deberia poner esto en un if para que evalue si le estamos pasando algo
        textoEncriptDesencript.style.cursor = "text";
        textoResuelto.style.display = "block";
        contenedor.style.alignItems = "normal"; //Esto no tiene mucha logica
        contenedor.style.justifyContent = "normal";
        
    }
    if(textoEncriptado == ""){
        muneco.style.display = "block";
        textoEncriptDesencript.style.cursor = "default";
        textoResuelto.style.display = "none";
        contenedor.style.alignItems = "center";
        contenedor.style.justifyContent = "center";
        
    }
}

encriptar.addEventListener("click",encriptarTexto);

function desencriptarTexto(){
    let textoDesencriptado = "";
    let texto = textareaElement.value; // Obtener el valor del elemento de texto encriptado
    for(let i = 0; i <= texto.length; i++){
        let caracter = texto.charAt(i);
        switch(caracter){
            case "a":
                textoDesencriptado += "a";
                i += 1;  //saltando lo que agrego el encriptado, por ejemplo en este caso agregaba al 'a' el 'i' para encriptarlo entonces solo me salte esa iteracion del 'i' a la hora de construir del mensaje desencriptado;
                break;
            case "e":
                textoDesencriptado += "e";
                i += 4; /*otro ejemplo: en este caso a la vocal 'e' se le agregaba 'nter' para encriptarlo entonces para desencriptarlo solo necesitaba saltarme esos elemento('nter') de la cadena de caracteres, para que
                haci quedara la e sola y desencriptada para ser agregada al texto desencriptado; */
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
                textoDesencriptado += caracter; //aqui agrega las letras que no son vocales;
                break;

        }
    }

    textoEncriptDesencript.value = textoDesencriptado;
    copiarTexto.style.backgroundColor = "#FFFFFF";
    copiarTexto.value = "copiar";

    if(textareaElement.value != ""){
        muneco.style.display = "none"; //tambien deberia poner esto en un if para que evalue si le estamos pasando algo
        textoEncriptDesencript.style.cursor = "text";
        textoResuelto.style.display = "block";
        contenedor.style.alignItems = "normal";
        contenedor.style.justifyContent = "normal";
        
    }
    
    if(textoDesencriptado == ""){
        muneco.style.display = "block";
        textoEncriptDesencript.style.cursor = "default";
        textoResuelto.style.display = "none";
        contenedor.style.alignItems = "center";
        contenedor.style.justifyContent = "center";

    }
}

desencriptar.addEventListener("click", desencriptarTexto);


function copiar(){
    copiarTexto.style.backgroundColor = "#00FF00";
    copiarTexto.value = "copiado!";
    copiarTexto.style.fontWeight = "bold";
    var elemento = document.createElement("textarea");
    elemento.value = textoEncriptDesencript.value;
    document.body.appendChild(elemento);
    elemento.select();
    document.execCommand("copy");
    document.body.removeChild(elemento);

}

copiarTexto.addEventListener("click",copiar);