# Word-Guess-Game

A hangman-style game built in javascript.

Play: https://ethanbonsignori.github.io/Word-Guess-Game/

## Gameplay

The computer will randomly select a word from an array and underscores will fill in to tell the user how many 
letters that word contains.

Type `a` through `z` or click on a letter in the display to guess if that letter is in the word.

On a correct guess the letter will populate the space that it occupies in the corresponding word in the array.

On any guess the letter will be added to a used letters list so that the user may not guess the same letter twice.

On an incorrect guess the user will lose one guess, until they reach 0 guesses and the game will restart.

The user starts with `8 guesses`.

Correctly guess the country to display that country's flag!

Press the ? icon for instructions.
