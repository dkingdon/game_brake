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
    var createCards = function() {
      cards = shuffle(cards);
      for (i = 1; i <= cards.length; i++) {
        $('#' + i).attr('data-card', cards[i - 1]);
        };
      }

    $('.card').on('click', isTwoCards = function() {
    	cardsInPlay.push(this.getAttribute("data-card"));
      console.log(cardsInPlay) //NOTE:remove before prod
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
    			if (cardsInPlay.length == 2) {
    				isMatch(cardsInPlay);
    				cardsInPlay = [];
    			}
    });

      var isMatch = function(cards){
      	if (cards[0] == cards[1]) {
      		alert("You found a match!");
      	}
      	else {
      		alert("Sorry, try again");
      		// window.location.reload(true);
      	}
      }

    createCards();

} //END OF CONTROLLER
