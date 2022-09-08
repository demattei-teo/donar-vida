AOS.init();

function show_menu() {
console.log("click")    
 
 document.querySelector(".navegation").classList.toggle("active");  
 document.querySelector(".btn-formulario").classList.toggle("btn-formulario-2");  /*sacando el position*/  
 document.querySelector(".svg-1").classList.toggle("svg-desaparece");  
 document.querySelector(".svg-2").classList.toggle("svg-desaparece");  /*desaparece el svg*/ 
 document.querySelector(".svg-3").classList.toggle("svg-desaparece");  
 /*valores desaparen*/ 
 document.querySelector(".desaparece-1").classList.toggle("valores-desaparece");
 document.querySelector(".desaparece-2").classList.toggle("valores-desaparece");
 document.querySelector(".desaparece-3").classList.toggle("valores-desaparece");
 document.querySelector(".desaparece-4").classList.toggle("valores-desaparece");
 document.querySelector(".desaparece-5").classList.toggle("valores-desaparece");
 document.querySelector(".desaparece-5").classList.toggle("valores-desaparece");

/*titulo contactanos*/ 
document.querySelector(".titulo-contactanos").classList.toggle("titulo-desaparece");
}