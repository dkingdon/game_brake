console.log("memory.js connected")

angular
  .module('games')
  .controller('memoryController', memoryController);

  memoryController.$inject = ['$http'];
  function memoryController ($http) {
    var vm = this;

    var cards = ["queen", "queen", "king", "king","jack", "jack", "ace", "ace", "king", "king","jack", "jack", "ace", "ace"];
//
// maybe have a function for each line of four. pulling from

    var cardsInPlay = [];

    var createCards = function() {
    	var gameBoard = $('#game-board');
      // console.log(gameBoard);

    	for (var i = 0; i < cards.length; i++) {
        // console.log(i);
        if (i % 4 === 0) {
          $('#game-board').append('<br>')
          console.log("break")
        }
    		var newDiv = document.createElement('div');
    		newDiv.className = "col-md-3 card ";

    		newDiv.setAttribute('data-card', cards[i]);
        console.log(newDiv);
    		newDiv.addEventListener('click', isTwoCards);

    		$('#game-board').append(newDiv);
    	}
    }

    var isTwoCards = function() {
    	cardsInPlay.push(this.getAttribute("data-card"));
    		if (this.getAttribute("data-card") == "king") {
    			this.innerHTML = '<img src = "images/king.png" alt = "King of Spades">';
    		}
    		else {
    			this.innerHTML = '<img src = "images/queen.png" alt = "Queen of Clubs">';
    		}
    			if (cardsInPlay.length == 2) {
    				isMatch(cardsInPlay);
    				cardsInPlay = [];
    			}
    }

      var isMatch = function(cards){
      	if (cards[0] == cards[1]) {
      		alert("You found a match!");
      	}
      	else {
      		alert("Sorry, try again");
      		// window.location.reload(true);
      	}
      }

    // createCards();

} //END OF CONTROLLER
