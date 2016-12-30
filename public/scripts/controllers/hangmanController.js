
angular
  .module('games')
  .controller('hangmanController', hangmanController);

  hangmanController.$inject = ['$http'];
  function hangmanController ($http) {
    var vm = this;

    var words = ['elephant','grandmother', 'remarkable', 'vexed', 'beekeepers', 'lynx', 'capricious', 'dichotomy', 'fastidious']

    var randomWord = words[Math.floor(Math.random() * words.length)];

    vm.hangman = new HangmanGame(randomWord);
    vm.guessLetter = function(input) {
      vm.hangman.guess(input);
      vm.hangman.input = '';
    }

  } //END OF CONTROLLER

    var HangmanGame = function(secretWord, tries) {
    this.secretWord = secretWord;
    this.input = "";
    this.guesses = [];
    this.triesRemaining = tries || 7;
    this.displayWord = this.filteredWord();
    this.gameOver = false;
    this.gameWon = null;
  };

  HangmanGame.prototype.guess = function(guess) {
    if (this.gameOver) {
      console.log("the game is over");
      return false;
    }
  var alreadyGuessed = this.guesses.indexOf(guess) !== -1;
    if (alreadyGuessed) {
      console.log("this letter has already been guessed");
      return;
    }

  this.guesses.push(guess);

  if (this.isLetterInWord(guess, this.secretWord)) {
    console.log('found ' + guess + ' in the word: ', this.secretWord);
    this.displayWord = this.filteredWord();
      } else {
        this.triesRemaining--;
        changeImage(this.triesRemaining);
      }

  this.checkForWinner();
    return;
  };

  function changeImage(tries) {
    if (tries === 6) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-5.png)')
    }
    else if (tries === 5) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-6.png)')
    }
    else if (tries === 4) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-7.png)')
    }
    else if (tries === 3) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-8.png)')
    }
    else if (tries === 2) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-9.png)')
    }
    else if (tries === 1) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-10.png)')
    }
    else if (tries === 0) {
        $('.image').css('content', 'url(../images/stickmen/STICKMAN-11.png)')
    }
  }

  HangmanGame.prototype.filteredWord = function() {
    var displayWord = '';
    for (var index in this.secretWord) {
      var currentLetter = this.secretWord[index];
      if(this.guesses.indexOf(currentLetter) > -1) {
        displayWord += currentLetter;
      } else {
        displayWord += '_';
      }
    }

    return displayWord;
  };


  HangmanGame.prototype.checkForWinner = function() {
    if(this.triesRemaining === 0) {
      console.log("Sorry, you loose.")
      this.gameOver = true;
      this.gameWon = false;
    } else if( !this.isLetterInWord("_", this.displayWord) ) {
      console.log("Yay, you win!")
      this.gameOver = true;
      this.gameWon = true;
    }
  };

  HangmanGame.prototype.isLetterInWord = function(guess, word) {
    return word.split('').indexOf(guess) > -1;
  };
