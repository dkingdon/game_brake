console.log("ttt.js connected")

angular
  .module('games')
  .controller('ticTacToeController', ticTacToeController);

  ticTacToeController.$inject = ['$http'];
  function ticTacToeController ($http) {
    var vm = this;
    vm.newBook = {};

  } //END OF CONTROLLER

$(document).ready(function() {
   // all code to manipulate the DOM
   // goes inside this function
   var targetId
   var turnSymbol = 'O'

   $('.col-md-4').click(function() {
         /* Grabs unique square id and places it in the var targetId */
     targetId = (this.id);
     /* Decideds if the square is clickable via an id check */
     if (targetId !== 'notAvail') {
         /* Contitional statement that determines whos turn it is X or O */
         if (turnSymbol === 'O'){
             turnSymbol = 'X';
         }
         else {
             turnSymbol = 'O';
         }
         /* Change square text value */
         switch (targetId) {
             case 'topLeft':
                 $('#topLeft').text(turnSymbol);
                 $('#topLeft').prop('id', 'notAvail')
                 break;
             case 'topMiddle':
                 $('#topMiddle').text(turnSymbol);
                 $('#topMiddle').prop('id', 'notAvail');
                 break;
             case 'topRight':
                 $('#topRight').text(turnSymbol);
                 $('#topRight').prop('id', 'notAvail');
                 break;
             case 'midLeft':
                 $('#midLeft').text(turnSymbol);
                 $('#midLeft').prop('id', 'notAvail');
                 break;
             case 'midMiddle':
                 $('#midMiddle').text(turnSymbol);
                 $('#midMiddle').prop('id', 'notAvail');
                 break;
             case 'midRight':
                 $('#midRight').text(turnSymbol);
                 $('#midRight').prop('id', 'notAvail');
                 break;
             case 'botLeft':
                 $('#botLeft').text(turnSymbol);
                 $('#botLeft').prop('id', 'notAvail');
                 break;
             case 'botMiddle':
                 $('#botMiddle').text(turnSymbol);
                 $('#botMiddle').prop('id', 'notAvail');
                 break;
             case 'botRight':
                 $('#botRight').text(turnSymbol);
                 $('#botRight').prop('id', 'notAvail');
                 break;
             default:
                 break;
             }
     }
  });
 });
