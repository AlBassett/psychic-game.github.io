var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//The computer select a random letter from the available choices
var letterGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

//Allows the user 10 guesses
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};
var updateGuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is pressed it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are a champion of probability!");
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Congrats! You've learned you're not a fraud and that this is just a matter of probablity. Try agian?");
            //calling the reset? 
            reset();
        }
};