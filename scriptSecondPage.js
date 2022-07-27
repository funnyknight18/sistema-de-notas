(function(){
    'use strict';      
              // button // 
const $button_requeste = document.querySelector('[data-js="button-revisa"]'); 
const $button_Clean = document.querySelector('[data-js="clean"]'); 

             // inputs // 
const $portugues = document.querySelector('[data-js="portugues"]');   
const $ciencia = document.querySelector('[data-js="Ciencias"]');
const $matematica = document.querySelector('[data-js="Matematica"]'); 
const $educaoFisica = document.querySelector('[data-js="Educação-Física"]');   
const $geografia = document.querySelector('[data-js="Geografia"]'); 
const $ingles = document.querySelector('[data-js="ingles"]'); 
const $filosofia = document.querySelector('[data-js="Filosofia"]'); 
const $arts = document.querySelector('[data-js="Artes"]'); 

           // events // 
$button_requeste.addEventListener( 'click' , calculatorNote , false );
$button_Clean.addEventListener('click' , clean_Inputs , false); 


const materias = [
   'Matematica', 'Portugues', 'Ciencia', 'Educação Física', 'Geografia' , 'Ingles' , 'Filosofia' , 'Arts'
];; 

const materiasValue = [
      $portugues.value , $matematica.value , $ciencia.value , $educaoFisica.value , $geografia.value , $ingles.value , $filosofia.value , $arts.value 
]; 


function clean_Inputs () { 
    $ciencia.value = ''; 
    $portugues.value = ''; 
    $matematica.value = '';
    $educaoFisica.value = ''; 
    $geografia.value = ''; 
    $ingles.value = ''; 
    $filosofia.value = ''; 
    $arts.value = '';  
}


function calculatorNote (event) { 
    event.preventDefault();
  if(  $ciencia.value === '' || $matematica.value  === '' || $portugues.value === '' || $educaoFisica.value === '' || $geografia.value === '' || $ingles.value === '' || $filosofia.value === '' || $arts.value === '' ){ 
     return window.alert('Preencha os campos em branco com a suas notas');  
  } else{ 
    menorQue10();
  }
} 

function menorQue10 () { 
$portugues.value > 10 || $matematica.value > 10 || $ciencia.value > 10 ? console.log('Todas Notas Teram Que Ser Entre 0 á 10') : reprovado() ; 
} 


function  reprovado() {  

      if( $ciencia.value < 6 ){ 
        console.log(`Reprovado em (${materias[2]}) :(`); 
      }
      if( $matematica.value < 6 ){ 
        console.log(`Reprovado em (${materias[0]}) :(`); 
      }
      if( $portugues.value < 6 ){ 
        console.log(`Reprovado em (${materias[1]}) :(`); 
      }
      if( $educaoFisica.value < 6 ){ 
        console.log(`Reprovado em (${materias[3]}) :(`); 
      }
      if( $geografia.value < 6 ){ 
        console.log(`Reprovado em (${materias[4]}) :(`); 
      }
      if( $arts.value < 6 ){ 
        console.log(`Reprovado em (${materias[7]}) :(`); 
      }
      if( $filosofia.value < 6 ){ 
        console.log(`Reprovado em (${materias[6]}) :(`); 
      }
      if( $ingles.value < 6 ){ 
        console.log(`Reprovado em (${materias[5]}) :(`); 
      }
      if( $ingles.value >= 6 && $ciencia.value >= 6 &&  $matematica.value >= 6 ){ 
        return console.log('Aprovado neste Bimetres :)');    
      } 
}

})(); 
