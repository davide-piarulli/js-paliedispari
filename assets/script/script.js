let parola = prompt('Scrivi una parola palindroma');
let parolaDivisa = parola.split('');
let parolaReverse = parolaDivisa.reverse();
let parolaInvertita = parolaReverse.join('');

if(parola == parolaInvertita){
  document.getElementById('outputpali').innerHTML = `Ottimo la parola: <strong>${parola}</strong> è PALINDROMA`;
} else {
  document.getElementById('outputpali').innerHTML = `Hai sbagliato, la parola: <strong>${parola}</strong> non è palindroma`;
}