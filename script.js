/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var input =  document.querySelector(".inp-ingrese");
var input2 = document.querySelector(".mje-encript");
var btnEncriptar = document.querySelector(".btn-encript");
var btnDesencriptar = document.querySelector(".btn-desencript");
var tieneMayusculas = /[A-ZáéíóúÁÉÍÓÚÑ]/;
var error = document.querySelector(".error");

function encriptar() {
	input2.value = input.value
		.replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "ai")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");
	if (tieneMayusculas.test(input.value)) {
		//MUESTRO EL MENSAJE DE ERROR
		error.style.display = "block";
		//VACIO EL INPUT DE ENCRIPTADO
		input2.value = "";
		//LO OCULTO DESPUES DE 2 SEG
		setTimeout(function () {
			error.style.display = "none";
		}, 2000); 
	}
	input.value = "";
}

function desencriptar(){
    input2.value = input.value
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');    
}

btnEncriptar.addEventListener("click",() =>{
    encriptar();    
})

btnDesencriptar.addEventListener("click",() =>{
    desencriptar();   
})

var btn = document.querySelector(".btn-copiar");

btn.addEventListener("click",() =>{
    input2.focus();
    input2.select();
    var cont = input2.value;
    navigator.clipboard.writeText(cont);
    
    
})






// Definimos la llave de encriptacion con el objeto KEY
/* const KEY = {  
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',  
  }

var btnEncode = document.querySelector("#btn-encode");
var btnDecode = document.querySelector("#btn-decode");
var btnCopy = document.querySelector("#btn-copy");
var msgEncode = document.querySelector("#input-text");
var msgDecode = document.querySelector("#output-text");

// Eventos 'click' para los botones
btnEncode.addEventListener("click", function(e){
  var emsg = msgEncode.value;
  msgDecode.value = encoder(emsg, KEY);
  e.preventDefault();
});

btnDecode.addEventListener("click", function(e){
  var dmsg = msgEncode.value;
  msgDecode.value = decoder(dmsg, KEY);
  e.preventDefault();
});

btnCopy.addEventListener("click", cp_outputbox_to_clipboard)


// Encriptamos lo ingresado en la caja de texto
function encoder(msg, KEY) {     
    Object.keys(KEY).forEach(k => msg = msg.replaceAll(k, KEY[k]));    
    return msg;
}

// Desencriptamos lo ingresado en la caja de texto
function decoder(msg, KEY) {
  const IKEY = swap_key_value(KEY);  
  Object.keys(IKEY).forEach((k) => msg = msg.replaceAll(k, IKEY[k]));  
  return msg;
};


/* Funcion swap_key_value() para invertir el par clave/valor
de la KEY y asi llevar a cabo la desencriptacion. 
*/ 
/*function swap_key_value(KEY) {
  var ret = {};
  for (var key in KEY) {
    // proceso de inversion par clave/valor
    ret[KEY[key]] = key;
  }
  return ret;
};

// Copiamos el contenido de InputBox de salida y lo pegamos en el portapapeles
function cp_outputbox_to_clipboard() {  
  if (!msgDecode.disabled) {
    msgDecode.select();
    document.execCommand("copy");
    alert("Texto copiado!")
  }
}
*/