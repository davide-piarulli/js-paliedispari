// Palindroma

const btn1 = document.getElementById('btnpali');


btn1.addEventListener('click', function(){
  let parola = prompt('Scrivi una parola palindroma');
  let parolaDivisa = parola.split('');
  let parolaReverse = parolaDivisa.reverse();
  let parolaInvertita = parolaReverse.join('');

  if(parola == parolaInvertita){
    document.getElementById('outputpali').innerHTML = `Ottimo la parola: <strong>${parola}</strong> è PALINDROMA`;
  } else {
    document.getElementById('outputpali').innerHTML = `Hai sbagliato, la parola: <strong>${parola}</strong> non è palindroma`;
  }
})


// Pari e Dispari
let pariDispari;
let numGiocatore;

let validPariDispari = false;
let validNumber = false;

// chiedo di inserire pari o dispari e verifico se è scritto bene
while (!validPariDispari) {
  pariDispari = prompt('Scrivi "pari" o "dispari"');

  if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
    validPariDispari = true;
  }else{
    alert('NON hai scritto pari o dispari!');
  }
}

while (!validNumber) {
  numGiocatore = parseInt(prompt('Scrivi un numero da 1 a 5'));
  if(isNaN(numGiocatore) === false){
    if(numGiocatore > 0 && numGiocatore <=5){
      validNumber = true;
    }else{
      alert('Hai inserito un numero errato');
    }
  }else{
    alert('Hai inserito una stringa invece che un numero');
  }
}
document.getElementById('outputparidisp').innerHTML = 
`
Hai scelto: ${pariDispari} <br>
Il tuo numero è: ${numGiocatore}
`;