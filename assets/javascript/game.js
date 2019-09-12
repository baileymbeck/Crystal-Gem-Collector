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
    function restart(){
        collectedNumber = 0;
        $("#collectedNumber").text(collectedNumber);

        //goal
        randomNumber = 19 + Math.floor(Math.random() * 102)
        $("#randomNumber").text(randomNumber);

        //crystal 1
        var crystalNum1 = 1 + Math.floor(Math.random() * 12)
        $("#boxOne").attr("data-number", crystalNum1);
        console.log("crystal1", crystalNum1)

        //crystal 2
        var crystalNum2 = 1 + Math.floor(Math.random() * 12)
        $("#boxTwo").attr("data-number",crystalNum2);
        console.log("crystal2", crystalNum2)

        //crystal 3
        var crystalNum3 = 1 + Math.floor(Math.random() * 12)
        $("#boxThree").attr("data-number",crystalNum3);
        console.log("crystal3", crystalNum3)

        //crystal 4
        var crystalNum4 = 1 + Math.floor(Math.random() * 12)
        $("#boxFour").attr("data-number",crystalNum4);
        console.log("crystal4", crystalNum4)
    }

    restart();

 //the img buttons have generated random numbers with a value between 1 - 12 in each box 

// random number for each img box

        $(".btn").on("click", function() {
            var num = parseInt($(this).attr("data-number"));
            collectedNumber = collectedNumber + num;
            console.log(collectedNumber);
            $("#collectedNumber").text(collectedNumber);

            if(collectedNumber === randomNumber){
                wins++;
                $("#wins").text(wins);
                // append the modal
                restart()


            } else if(collectedNumber > randomNumber){
                losses++;
                $("#losses").text(losses);
                // append the modal
                restart()

            }

        });



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




