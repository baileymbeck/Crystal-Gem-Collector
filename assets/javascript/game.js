// set game variables from html
var randomNumber = 0;
var collectedNumber = 0;

var wins = 0;
var losses = 0;


var secretChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


// <---------- Psuedo code ---------->

// may need to reevaluate secretNumber var name

// ----- At start -----
// game loads a random number with a value between 19 - 120 in id = "randomNumber"

        setTimeout (function() {
        var number = 1 + Math.floor(Math.random() * 120)
        $("#randomNumber").text(number)
        }
        );
 //the img buttons have generated random numbers with a value between 1 - 12 in each box 

// random number for each img box
        setTimeout (function() {
            var number = 1 + Math.floor(Math.random() * 12)
            $("boxOne")
            console.log(number)
        });
        setTimeout (function() {
            var number = 1 + Math.floor(Math.random() * 12)
            $("boxTwo")
            console.log(number)
        });
        setTimeout (function() {
            var number = 1 + Math.floor(Math.random() * 12)
            $("boxThree")
            console.log(number)
        });
        setTimeout (function() {
            var number = 1 + Math.floor(Math.random() * 12)
            $("boxFour")
            console.log(number)

// button listener
        $("#boxFour").on("click", function() {
            number += collectedNumber;
            });
        }
        );





//  ----- On click -----
// when an img btn is clicked, the random number associated with it will appear in id = "secretNumber"
// the subsequent clicks of other crystals will be added to the collectedNumber total, allowing the player to determine 
// to secret numbers


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




