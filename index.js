function encriptar() {
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");

   // Verificar si el texto contiene mayúsculas, acentos o caracteres especiales
   if (/[^a-z\s]/.test(texto)) {
       alert("El texto solo debe contener letras minúsculas y espacios");
       return;
   }

   let textoCifrado = texto
   .replace(/e/gi, "enter")
   .replace(/i/gi, "imes")
   .replace(/a/gi, "ai")
   .replace(/o/gi, "ober")
   .replace(/u/gi, "ufat");

   if (texto.length != 0) {
       document.getElementById("texto").value = textoCifrado
       tituloMensaje.textContent = "Texto encriptado con exito";
       parrafo.textContent = "";
       muñeco.src = "./Imagenes/muñeco.png";
   } else {
       muñeco.src ="./Imagenes/muñeco.png";
       tituloMensaje.textContent = "Ningún mensaje fue encontrado";
       parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
       alert("Debes ingresar algún texto");
   }                   
}

function desencriptar(){
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");

   // Verificar si el texto contiene mayúsculas, acentos o caracteres especiales
   if (/[^a-z\s]/.test(texto)) {
       alert("El texto solo debe contener letras minúsculas y espacios");
       return;
   }

   let textoCifrado = texto
   .replace(/enter/gi, "e")
   .replace(/imes/gi, "i")
   .replace(/ai/gi, "a")
   .replace(/ober/gi, "o")
   .replace(/ufat/gi, "u");

   if (texto.length != 0) {
       document.getElementById("texto").value = textoCifrado
       tituloMensaje.textContent = "Texto desencriptado con exito";
       parrafo.textContent = "";
       muñeco.src = "./Imagenes/muñeco.png";
   } else {
       muñeco.src ="./Imagenes/muñeco.png";
       tituloMensaje.textContent = "Ningún mensaje fue encontrado";
       parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
       alert("Debes ingresar algún texto");
   }
}
