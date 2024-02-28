let parolaDivisa = parola.split('');
let parolaReverse = parolaDivisa.reverse();
let parolaInvertita = parolaReverse.join('');
const btn1 = document.getElementById('btn1');


btn1.addEventListener('click', function(){
  let parola = prompt('Scrivi una parola palindroma');

  if(parola == parolaInvertita){
    document.getElementById('outputpali').innerHTML = `Ottimo la parola: <strong>${parola}</strong> è PALINDROMA`;
  } else {
    document.getElementById('outputpali').innerHTML = `Hai sbagliato, la parola: <strong>${parola}</strong> non è palindroma`;
  }
})





