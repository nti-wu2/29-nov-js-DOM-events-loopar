let suits = ['klöver', 'spader', 'ruter', 'hjärter'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'knekt', 'dam', 'kung', 'ess']

let deck = [];
console.log(deck)

for(let i = 0; i<suits.length; i++){

    for(let j = 0; j<values.length; j++){

        let card = `${suits[i]} ${values[j]}`;
//      let card = 'kort' + ' ' + suits[i] + ' ' +values[j];
        deck.push(card);
    }
}

let randomIndex = Math.floor(Math.random()*deck.length);

document
.querySelector('h1')
.innerText = deck[randomIndex];