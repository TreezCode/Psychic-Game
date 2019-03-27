
// Create variables to track wins/losses.
var wins = 0
var losses = 0 

var guessLeft = 9

// Create an array of computer choices.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create an array for user guesses.
var wrongGuess = [];

// Create variables to reference places in HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guess-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text")

// This functions starts game upon key event.
document.onkeyup = function(event) {

    // if (userGuess = ) {

        // User picks a letter from key press.
        var userGuess = event.key;
        console.log("user guess is " + userGuess);

        // Computer picks a random.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computer guess is " + computerGuess);

        // Checks if user is psychic and adds wins/losses.
        if (userGuess === computerGuess) {
            wins++;
            guessLeft = 9; 
        } else if (userGuess !== computerGuess) {
            wrongGuess.push(event.key);
            guessLeft--;
        };

        if (guessLeft < 1) {
            wrongGuess = [];
            guessLeft = 9;
            losses++;
        }

        // Display the user guesses.
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessLeftText.textContent = guessLeft;
        wrongGuessText.textContent = wrongGuess;

    // }

};