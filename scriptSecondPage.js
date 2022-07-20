(function(){
    'use strict'; 
  
const $button_requeste = document.querySelector('[data-js="button-revisa"]'); 
const $portugues = document.querySelector('[data-js="portugues"]');   
const $ciencia = document.querySelector('[data-js="Ciencias"]');
const $matematica = document.querySelector('[data-js="Matematica"]');  


$button_requeste.addEventListener( 'click' , calculatorNote , false );


const materias = [
   'matematica', 'portugues', 'ciencia'
]; 

function calculatorNote (event) { 
    event.preventDefault();

  if(  $ciencia.value === '' && $matematica.value  === '' && $portugues.value === ''){ 
     return window.alert('Preencha os campos em branco com a suas notas');  
  } else{ 
    menorQue10();
  }
} 

function menorQue10 () { 
$portugues.value > 10 || $matematica.value > 10 || $ciencia.value > 10 ? console.log('Todas Notas Teram Que Ser Entre 0 á 10') : reprovado() ; 
} 


function  reprovado() {  
    if( $ciencia.value <= 6 ){ 
        console.log(`Reprovado em (${materias[2]}) :(`); 
      }
      if( $matematica.value <= 6 ){ 
        console.log(`Reprovado em (${materias[0]}) :(`); 
      }
      if( $portugues.value <= 6 ){ 
        console.log(`Reprovado em (${materias[1]}) :(`); 
      }
      if( $portugues.value >= 6 && $ciencia.value >= 6 &&  $matematica.value >= 6 ){ 
        return console.log('Aprovado neste Bimetres :)');    
      } 
}

})(); 



// colocar as outras materias //  com input 
