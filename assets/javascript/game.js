// Declare variables
var hangman = {
      wins: 0,      // Number of times the user successfully guessed the word
      losses: 0,     // Number of times the user ran out of guesses
      guesses: 10,    // User's guesses remaining
      countries: ["united states of america", "japan", "canada", "new zealand", "russia", "sweden"],  // List of words to choose from for the user to guess
      chosenWord: "",
      alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",   
                 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],  // List of acceptable keys the user can guess
      usedLetters: [], // Holds users guessed letters so they cannot be re-used
      underscores: [], // Will populate screen with underscores to match the number of letters in chosen random country

      randomWord: function() {  // Picks a random word in the countries array and displays it to console
      let randomNumber = Math.floor(Math.random() * this.countries.length);
      this.chosenWord = this.countries[randomNumber];
      },
        
      generateUnderscores: function() {
        for(let i = 0; i < this.chosenWord.length; i++) {
          this.underscores.push('_');
        }
      },
      
      debug: function() {
        console.log("Wins: " + this.wins);
        console.log("Losses: " + this.losses);
        console.log("Guesses remaining " + this.guesses);
        console.log("==================")
        console.log("Hidden word: " + this.chosenWord);
        console.log("Underscores: " + this.underscores);
        console.log("Letters tried: " + this.usedLetters);
      }
      

    };


hangman.randomWord();
hangman.generateUnderscores();
hangman.debug();

