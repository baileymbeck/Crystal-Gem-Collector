// set game variables from html
var randomNumber = 0;
var secretNumber = 0;
var wins = 0;
var losses = 0;


// <---------- Psuedo code ---------->

// may need to reevaluate secretNumber var name

// ----- At start -----
// per the youtube demo the game loads a random number with a value between 19 - 120 in id = "randomNumber"
// the image buttons also has generated random numbers with a value between 1 - 12 in each box - id="box-one", id="box-two", etc

//  ----- On click -----
// when an img btn is clicked, the random number associated with it will appear in id = "secretNumber"
// the subsequent clicks of other crystals will be added to the secretNumber total, allowing the player to determine to secret numbers

// ----- Determine win/lose -----

// WIN
// if numbers added to secretNumber === randomNumber
// wins++
// randomNumber reset
// secretNumbers = 0
// id boxes 1-4 reset

// LOSE
// losses++
// randomNumber reset
// secretNumbers = 0
// id boxes 1-4 reset

