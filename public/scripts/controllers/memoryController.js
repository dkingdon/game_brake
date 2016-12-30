
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
    }

    /* - - Random card placement - - */
    function createCards() {
      cards = shuffle(cards);
      for (i = 1; i <= cards.length; i++) {
        $('#' + i).attr('data-card', cards[i - 1]);
        };
      }

    var cardIds = [];
    var tries = 0

    $('.card').on('click', isTwoCards = function() {
      tries += 1;
    	cardsInPlay.push(this.getAttribute("data-card"));
      cardIds.push(this.getAttribute('id'));
        if (this.getAttribute("data-card") == "jupiter") {
    			this.innerHTML = '<img src = "images/jupiter.png" alt = "Jupiter">';
    		}
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
          $('#memory-foot').text("You found a match!");
          matchesFound += 1
          cardIds = []
          if (matchesFound === 6) {
            $('#memory-foot').text("Great job! You found all of the matches in " + (tries/2) + " tries. Play again to see if you can get the matches in less tries")
          }
      	}
      	else {
          $('#memory-foot').text("Sorry, try again");
          $('#' + cardIds[0]).first().empty()
          $('#' + cardIds[1]).first().empty()
          cardIds = []
      	}
      }

    createCards();

} //END OF CONTROLLER
