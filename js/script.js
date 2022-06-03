let dealerScores = 0;
let playerScores = 0;

let dealerAceCount = 0;
let playerAceCount = 0; 

let hidden;
let deck;

let canHit = true; //allows the player to draw cards while scores <=21

window.onload = function () {

}

// Looping through values and suits and creates array of 52 cards
function createCards() {
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    let suits = ["C", "D", "H", "S"];
    deck = [];

    //looping through card suits and values to create an array of 52 cards
    //C for Clubs, D - diamonds, H - Hearts, S - Spades
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            deck.push(values[v] + "-" + suits[s]);
        }
    }
    console.log(deck);
}