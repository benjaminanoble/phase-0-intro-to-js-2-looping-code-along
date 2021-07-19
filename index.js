// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);

  function writeCards(names, surprise) {
    let cards = []
    for ( let i = 0; i < names.length; i++ ) {
      cards.push( `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` )
    }
    return cards
  }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

const firstNumber = 10

function countDown(firstNumber) {
    while(firstNumber > 0) {
        console.log(firstNumber);
        firstNumber -=1
    }
    console.log(firstNumber);
}