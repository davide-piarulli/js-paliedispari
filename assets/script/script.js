// Palindroma
const btn1 = document.getElementById('btnpali');

function parolaPalindroma(stringa) {
  // divido la parola
  for (let i = 0; i < stringa.length / 2; i++) {
    if (stringa[i] !== stringa[stringa.length - 1 - i]) {
      return false;
    } 
  }
  return true;
}
btn1.addEventListener('click', function(){
  let parola = prompt('Scrivi una parola palindroma');
if (parola !== null && parola === parola.toLowerCase()) {
  if (parolaPalindroma(parola)) {
    document.getElementById('outputpali').innerHTML = 
    `Ottimo la parola: <strong>${parola}</strong> è PALINDROMA`;
  } else {
    document.getElementById('outputpali').innerHTML = 
    `Hai sbagliato, la parola: <strong>${parola}</strong> non è palindroma`;
    }
}
})


// Pari e Dispari
const btn2 = document.getElementById('btnparidisp');

btn2.addEventListener('click', function(){
  let pariDispari;
  let numGiocatore;
  let validPariDispari = false;
  let validNumber = false;
  const numPc = numRandom();

  // chiedo di inserire pari o dispari e verifico se è scritto bene
  while (!validPariDispari) {
    pariDispari = prompt('Scrivi "pari" o "dispari"');
  
    if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
      validPariDispari = true;
    }else{
      alert('NON hai scritto pari o dispari!');
    }
  };
  
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
  };
  
  // funzione per il numero casuale del PC
  function numRandom() {
    // Genera un numero casuale compreso tra 1 e 5
    return Math.floor(Math.random() * 5) + 1;
  };
  
  let somma = numGiocatore + numPc;
  // funzione per la somma
  function sommaNum(numA, numB) {
    let somma = numA + numB;

    if (somma % 2 === 0){
      somma = 'pari';
    } else {
      somma = 'dispari';
    }

    return somma;
  }
  
  let resultNumber = sommaNum(numGiocatore, numPc);

  if (resultNumber === numGiocatore) {
    result = 'Hai vinto!';
  } else{
    result = 'Hai perso!';
  }
  
  
  
  document.getElementById('outputparidisp').innerHTML = 
  `
  Hai scelto: ${pariDispari} <br>
  Il tuo numero è: ${numGiocatore} <br>
  Il numero random del PC è: ${numPc} <br>
  La somma è: ${somma} <br>
  ${result} <br>
  `;
})
