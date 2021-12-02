// misure delle colonne
const rowEasy = 10;
const colEasy = 10;

const rowNormal = 9;
const colNormal = 9;

const rowCrazy = 7;
const colCrazy = 7;

// creo tre array
let bombNumber100 = [];

let bombNumber81 = [];

let bombNumber49 = [];

// per ogni array creo 16 numeri differenti random
while (bombNumber100.length < 16) {
  const randomNumber100  = Math.floor(Math.random() * 100) + 1;
  if (!bombNumber100.includes(randomNumber100)) {
      bombNumber100.push(randomNumber100);
  }
}
console.log(bombNumber100);
while (bombNumber81.length < 16) {
    const randomNumber81  = Math.floor(Math.random() * 81) + 1;
    if (!bombNumber100.includes(randomNumber81)) {
      bombNumber81.push(randomNumber81);
  }
}

while (bombNumber49.length < 16) {
    const randomNumber49  = Math.floor(Math.random() * 49) + 1;
    if (!bombNumber100.includes(randomNumber49)) {
      bombNumber49.push(randomNumber49);
  }
}

// richiamo la classe container per poter inserire i quadrati
const container = document.querySelector('.container');

// richiamo il bottone per eseguire il click
const button = document.getElementById('play');

// al click di play compare la griglia con la difficoltà selezionata

button.addEventListener('click',
  function () {
    //   svuoto il contenuto ad ogni click
    container.innerHTML = '';

    // richiamo le selec
    let selection = document.getElementById('select').value;

    // se seleziono easy compare la griglia easy
    if (selection == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            al click verifico se il numero selezionato è
            // al click verifico se il numero è presente o meno nell'array dando un differente colore
            square.addEventListener('click', function () {
                if (bombNumber100.includes(i)) {
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                    bombNumber100.style.backgroundColor = 'red';
                } else {
                    this.style.backgroundColor = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            // dimensiono i quadrati
            square.style.width = `calc(100% / ${colEasy})`;
            square.style.height = `calc(100% / ${rowEasy})`;
            square.append(i);
            container.append(square);
        }
    } 

    // se seleziono normal compare la griglia normal
    else if (selection == 'Normal'){
        for (let i = 1; i <= 81; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // al click verifico se il numero è presente o meno nell'array dando un differente colore
            square.addEventListener('click', function () {
                if (bombNumber81.includes(i)) {
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                } else {
                    this.style.backgroundColor = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            // dimensiono i quadrati
            square.style.width = `calc(100% / ${colNormal})`;
            square.style.height = `calc(100% / ${rowNormal})`;
            square.append(i);
            container.append(square);
        }
    } 

    // se seleziono crazy compare la griglia crazy
    else if (selection == 'Crazy') {
        for (let i = 1; i <= 49; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // al click verifico se il numero è presente o meno nell'array dando un differente colore
            square.addEventListener('click', function () {
                if (bombNumber49.includes(i)) {
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                } else {
                    this.style.backgroundColor = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            // dimensiono i quadrati
            square.style.width = `calc(100% / ${colCrazy})`;
            square.style.height = `calc(100% / ${rowCrazy})`;
            square.append(i);
            container.append(square);
        }
    }
  });


