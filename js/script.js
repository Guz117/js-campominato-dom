const rowEasy = 10;
const colEasy = 10;

const rowNormal = 9;
const colNormal = 9;

const rowCrazy = 7;
const colCrazy = 7;

// creo tre array di 16 numeri casuali per ogni griglia

let bombNumber100 = [];
console.log(bombNumber100);
let bombNumber81 = [];
console.log(bombNumber81);
let bombNumber49 = [];
console.log(bombNumber49);
  
while (bombNumber100.length < 16) {
  const randomNumber100  = Math.floor(Math.random() * 100) + 1; 
  if (!bombNumber100.includes(randomNumber100)) {
      bombNumber100.push(randomNumber100);
  }
}

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

const container = document.querySelector('.container');
const button = document.getElementById('play');

// al click di play compare la griglia con la difficoltà selezionata

button.addEventListener('click',
  function () {
    container.innerHTML = '';
    let selection = document.getElementById('select').value;
    console.log(selection)
    if (selection == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                if (i == 32) {
                    this.style.background = 'red';
                    this.style.color = 'white'
                } else {
                    this.style.background = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            square.style.width = `calc(100% / ${colEasy})`;
            square.style.height = `calc(100% / ${rowEasy})`;
            square.append(i);
            container.append(square);
        }
    } else if (selection == 'Normal'){
        for (let i = 1; i <= 81; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                if (i == 32) {
                    this.style.background = 'red';
                    this.style.color = 'white'
                } else {
                    this.style.background = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            square.style.width = `calc(100% / ${colNormal})`;
            square.style.height = `calc(100% / ${rowNormal})`;
            square.append(i);
            container.append(square);
        }
    } else if (selection == 'Crazy') {
        for (let i = 1; i <= 49; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                if (i == 32) {
                    this.style.background = 'red';
                    this.style.color = 'white'
                } else {
                    this.style.background = '#6495ed';
                    this.style.color = 'white'
                }
            } );
            square.style.width = `calc(100% / ${colCrazy})`;
            square.style.height = `calc(100% / ${rowCrazy})`;
            square.append(i);
            container.append(square);
        }
    }
  });


