
// Create variables to track wins and losses.
var wins = 0
var losses = 0 

// Create variable for remaining guesses.
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

// Create a function for game reset.
var gameReset = () => {
    wrongGuess = [];
    guessLeft = 9;
}

// This functions starts game upon key event.
document.onkeyup = function(event) {

    // Create variable to determine which key was pressed.
    var keyCode = event.which

    // Only run this block of code if key press is a letter.
    if (keyCode >= 65 && keyCode <=125) {

        // User guess depends on key press.
        var userGuess = event.key;

        // Computer chooses a random letter from array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Checks if user is psychic and add wins/losses.
        if (userGuess === computerGuess) {
            gameReset();
            wins++; 
        } else if (userGuess !== computerGuess) {
            wrongGuess.push(event.key);
            guessLeft--;
        };
        // Reset game and add a loss if user has 0 guesses left.
        if (guessLeft < 1) {
            gameReset()
            losses++;
        }

        // Display the user variables to HTML.
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessLeftText.textContent = guessLeft;
        wrongGuessText.textContent = wrongGuess;

    }

};
