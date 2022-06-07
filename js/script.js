let dealerScores = 0;
let playerScores = 0;

let dealerAceCount = 0;
let playerAceCount = 0; 

let hidden;
let deck;

let canHit = true; //allows the player to draw cards while scores <=21

window.onload = function () {
    createCards();
    shuffleCards();
    startGame();

}

// Looping through values and suits and creates array of 52 cards
function createCards() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["clubs", "diamonds", "hearts", "spades"];
    deck = [];

    //looping through card suits and values to create an array of 52 cards
    //C for Clubs, D - diamonds, H - Hearts, S - Spades
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            deck.push(values[v] + "-" + suits[s]);
        }
    }
    //console.log(deck);
}

//shuffle the cards, sorting an Array in Random Order 
//(https://www.w3schools.com/js/js_array_sort.asp)
function shuffleCards() {
    deck = deck.sort(function() {
        return 0.5 - Math.random()
    });
    // console.log("After shuffle " + deck);
}

//dealing the cards to computer and player
function startGame() {
    //get card from end of card array
    hidden = deck.pop();
    //get the value of the card and add it to the points
    dealerScores += getValue(hidden);
    dealerAceCount += checkAce(hidden);
  
    console.log(hidden);
    console.log(dealerScores);

// check if dealer's scores not exceed 17
    while (dealerScores < 17) {
    //create img tag
    let cardImg = document.createElement("img");
    //get source for img tag
    let card = deck.pop();
    cardImg.src = "img/" + card + ".png";
    dealerScores += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
}
    console.log(dealerScores);

//give first 2 cards for player
    for (let i = 0; i < 2; i++) {
    //create img tag
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "img/" + card + ".png";
    playerScores += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);

}
console.log(playerScores);
//add an event listener to the button 'Hit me !' 
document.getElementById(hit).addEventListener('click', hit);

//add an event listener to the button 'Stay!' 
document.getElementById(stay).addEventListener('click', stay);

}



//function checks if card contains digits or numbers and return card numeric value
function getValue(card) {
    let number = card.split("-"); // got array  from card 9-H => [9, H]
    let value = number[0];
    //check if card contains digits or numbers and return card value
    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        //all cards with image (J, Q, K) equals 10, except Ace
        return 10;
    }
    //if card value have digit returns its value
    return parseInt(value);
}

// check how many Aces are in hand
function checkAce(row) {
    if (row[0] === "A") {
        return 1;
    } else {
        return 0;
    }
}
