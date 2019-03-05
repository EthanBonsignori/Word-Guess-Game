// Declare hangman object
const hangman = {
  wins: 0,      // Number of times the user successfully guessed the word
  losses: 0,     // Number of times the user ran out of guesses
  guesses: 10,    // User's guesses remaining
  
  // List of words to choose from for the user to guess
  countries: ["united states of america", "japan", "canada", "new zealand", "russia", "sweden"],

  alphabet:  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
  rightLetters: [], // Holds users correctly guessed letters
  wrongLetters: [], // Holds users incorrectly guessed letters
  underscores: [], // Will populate screen with underscores to match the number of letters in chosen random country
  chosenWord: "",  // Holds the randomly selected word from the randomWord function
  playerGuess: "", // Holds the letter pressed by the player

  // Picks a random word in the countries array and displays it to console
  randomWord: function() {  
    let randomNumber = Math.floor(Math.random() * this.countries.length);
    this.chosenWord = this.countries[randomNumber];
      // Adds one underscore per letter in the randomly selected word from the countries array
      for (let i = 0; i < this.chosenWord.length; i++) { 
        this.underscores.push('_');
      }
  },


  
  // Checks if the players guess is a letter and not a sybmol 
   checkGuess: function(event) {
    this.playerGuess = event.key.toLowerCase();
    if (!isLetter(this.playerGuess)) {
      return; // Stops here if not letter
    } 
      let indeces = [];  // Holds indeces of playerguess in random word
      for (let i = 0; i < hangman.chosenWord.length; i++) {  // Loop for number of letters in random word
        if (hangman.chosenWord.charAt(i) === this.playerGuess) {  // Executes if the playerGuess is found in the random word
          indeces.push(i);  // Adds the index of the playerGuess found in the random word to indeces array
            for (const index of indeces) {
            console.log("index: " + index);
            hangman.underscores[index] = this.playerGuess; // Replace underscore for every index it matches with playerGuess
            console.log("Letters uncovered: " + hangman.underscores)
            }
        } else if (hangman.wrongLetters.includes(this.playerGuess)) {
            console.log("Already guessed that letter!");
            alert("Already guessed that letter!");
            break;
        } else {
            hangman.guesses--;
            hangman.wrongLetters.push(this.playerGuess);
            console.log("Incorrect letters: " + hangman.wrongLetters);
            console.log("Guesses remaining: " + hangman.guesses);
            break;
        }
        
      }
    },
  
  

  debug: function() { // Outputs necessary variables to console for debugging
    console.log("Wins: " + this.wins);
    console.log("Losses: " + this.losses);
    console.log("Guesses remaining " + this.guesses);
    console.log("==============================")
    console.log("Hidden word: " + this.chosenWord);
    console.log("Underscores: " + this.underscores);
    console.log("Letters tried: " + this.usedLetters);
  }
};

hangman.randomWord();
hangman.debug();

document.onkeyup = hangman.checkGuess;

function isLetter(letter) {
  return letter.length === 1 && letter.match(/[a-z1]/i);
};