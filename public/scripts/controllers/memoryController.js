console.log("memory.js connected")

angular
  .module('games')
  .controller('memoryController', memoryController);

  memoryController.$inject = ['$http'];
  function memoryController ($http) {
    var vm = this;

    var cards = ["sun", "sun", "earth", "earth", "mars", "mars", "jupiter", "jupiter", "saturn", "saturn", "neptune", "neptune"];

    var cardsInPlay = [];

    /* - - Shuffles card array for random card placement - - */
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
      console.log(array);
    }

    /* - - Random card placement - - */
    function createCards() {
      cards = shuffle(cards);
      for (i = 1; i <= cards.length; i++) {
        $('#' + i).attr('data-card', cards[i - 1]);
        };
      }

    var cardIds = []; //Ids of cards in play for the purpose of flipping them back to original state if match is not found
    var tries = 0

    $('.card').on('click', isTwoCards = function() {
      tries += 1;
    	cardsInPlay.push(this.getAttribute("data-card"));
      cardIds.push(this.getAttribute('id'));
        if (this.getAttribute("data-card") == "jupiter") {
    			this.innerHTML = '<img src = "images/jupiter.png" alt = "Jupiter">';
    		}
        // need  to add logic to make second card not flip if isMatch is not true and flip the two cards back again.
        else if (this.getAttribute("data-card") == "sun") {
          this.innerHTML = '<img src = "images/sun.jpg" alt = "Sun">';
        }
        else if (this.getAttribute("data-card") == "earth") {
          this.innerHTML = '<img src = "images/earth.jpg" alt = "Earth">';
        }
        else if (this.getAttribute("data-card") == "mars") {
          this.innerHTML = '<img src = "images/mars.jpg" alt = "Mars">';
        }
        else if (this.getAttribute("data-card") == "saturn") {
          this.innerHTML = '<img src = "images/saturn.jpg" alt = "Saturn">';
        }
    		else {
    			this.innerHTML = '<img src = "images/neptune.jpg" alt = "Neptune">';
    		}
        console.log("tries = " + tries);
        setTimeout(checkCards, 1000);

    });

    function checkCards(){
      if (cardsInPlay.length == 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
      }
    }

    var matchesFound = 0 // once value = 6, game is over

      function isMatch(cards){
      	if (cards[0] == cards[1]) {
      		alert("You found a match!");
          matchesFound += 1
          cardIds = []
          if (matchesFound === 6) {
            alert("Great job! You found all of the matches in " + (tries/2) + " tries. Play again to see if you can get the matches in less tries")
          }
      	}
      	else {
      		alert("Sorry, try again");
          $('#' + cardIds[0]).first().empty()
          $('#' + cardIds[1]).first().empty()
          cardIds = []
      	}
      }


      // NOT WORKING: need to find a way to reset the game.
      // $('#reset-btn').on('click', function(){
      //   $location.path('/memory');
      //   $route.reload();
        // cardIds = [];
        // matchesFound = 0;
        // tries = 0
        // for (var i = 0; i <= cards.length; i++) {
        //   $('#' + cardIds[i]).first().empty();
        // };
        // createCards();
      // });

      //reset game
      // need to zero out cardIds, matchesFound, and tries

    createCards();

} //END OF CONTROLLER
