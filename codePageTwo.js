(function(){
    'use strict'; 
  
const $button_requeste = document.querySelector('[data-js="button-revisa"]'); 
const $portugues = document.querySelector('[data-js="portugues"]');   
const $ciencia = document.querySelector('[data-js="Ciencias"]');
const $matematica = document.querySelector('[data-js="Matematica"]');  


$button_requeste.addEventListener( 'click' , calculatorNote , false );

function calculatorNote (event) { 
    event.preventDefault(); 
   var sum = Number($portugues.value) + Number($matematica.value) + Number($ciencia.value) / 3 ; 
   $portugues.value >= 6 ? console.log('aprovado em portugues') : console.log('recuperacao em portgues'); 
   $ciencia.value >= 6 ? console.log('aprovado em ciencia') : console.log('recuperaçao em ciencias'); 
   $matematica.value >= 6 ? console.log('aprovado em matematica') : console.log('recuperaçao em matematica'); 
} 

})(); 
