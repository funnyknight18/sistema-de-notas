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

    
  if(  $ciencia.value === '' && matematica === '' && portugues === ''){ 
     return window.alert('Preencha os campos em branco com a suas notas');  
  } else{ 
    menorQue10();
    reprovado();
  }
} 

function  reprovado( portugues , ciencia , matematica) { 
    console.log(ciencia); 
    if( $ciencia.value <= 6 ){ 
        console.log(`Reprovado em ${materias[2]}`); 
      }
      if( matematica <= 6 ){ 
        console.log(`Reprovado em ${materias[1]}`); 
      }
      if( portugues <= 6 ){ 
        console.log(`Reprovado em ${materias[0]}`); 
      }
}

function menorQue10 ( portugues , ciencia , matematica ) { 
    if( portugues > 10 && matematica > 10 && $ciencia.value > 10 ){ 
        console.log('As notas teram que ser entre 0 á 10'); 
    } 

}

})(); 


// tem que trocar todas as propriedade para exemple.value; 

 // proximo passo é mecher no html e resolver o input... 
