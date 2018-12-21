// Creates an array that lists out all of the options (letters to be guessed).
// var computerChoices = ["r", "p", "s", "t", "l", "j"];
var computerChoices = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var Guesses = 9;
var allUserGuess = "";
const maxTries = 10;            // Maximum number of tries player has
var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again' 

// reset game with either win or 0 guesses
var resetGuesses = function () {
    Guesses = 9;
    allUserGuess = ""; 
    document.querySelector("#Guesses").innerHTML = '';
    computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
}   

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("GameDirections");
var userChoiceText = document.getElementById("GuessesLeft");
var computerChoiceText = document.getElementById("computerchoice");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var GuessesText = document.getElementById("Guesses");

    // Randomly chooses a choice from the options array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    if (!this.value.match(/[a-z]/)) {
        this.value = this.value.replace(/[^a-z]/g, '');
    }


    // Determines which key was pressed.
    var userGuess = event.key;
    // var yourGuess = userGuess;
// console.log(userGuess);



    // determines the outcome of the game (win/loss/tries), and increments the appropriate number


    // while (Guesses >= 0) {

        // if ((computerGuess === "r") || (computerGuess === "p") || (computerGuess === "s") || (computerGuess === "t") || (computerGuess === "l") || (computerGuess === "j")) {

        // for (var tries = 0; tries < computerGuess; tries++) {
            

            if ((userGuess===computerGuess)) {
            wins++;
            resetGuesses(); 
            // alert("Wins: " + wins);

        }       if (Guesses == 0) {
                losses++;
                resetGuesses();
        }
        // console.log(computerGuess);

        allUserGuess = allUserGuess + " " + userGuess;

        

        userChoiceText.textContent = "Your Guesses so far:  " + allUserGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        GuessesText.textContent = "GuessesLeft: " + Guesses--;
        // document.querySelector("#GuessesLeft").innerHTML + userGuess;
    };
// console.log(Guesses);
    
// };
