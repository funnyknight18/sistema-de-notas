(function( document , window){
    'use strict';  
 
const $codigoAluno = document.querySelector('[data-js="login"]'); 
const $senha = document.querySelector('[data-js="senha"]'); 
const $button = document.querySelector('[data-js="button-login"]'); 


$button.addEventListener('click' , Sendlogin , false ); 

function Sendlogin (event) { 
  event.preventDefault(); 
  if( $senha.value === '' || $codigoAluno === '')
    return window.alert('Prencha todas as informações'); 
    nextpage(); 
}

 function nextpage () {  
   const $front = document.querySelector('[data-js="header-button"]'); 
   $front.innerHTML = ''; 
   $front.innerHTML = '<h1> </h1>'
   $front.insertAdjacentHTML('beforeend', ' <a href="teste.html"><button>Next</button></a>'); 
}


})( document , window ); 
