console.log("ttt.js connected")

angular
  .module('games')
  .controller('ticTacToeController', ticTacToeController);

  ticTacToeController.$inject = ['$http'];
  function ticTacToeController ($http) {
    var vm = this;

   var turnSymbol = 'O';
   var tilesInPlay = [];
   var winner = false;
   var gameBoard = ['topLeft', 'topMiddle', 'topRight', 'midMiddle', 'midLeft', 'midRight', 'botLeft','botRight', 'botMiddle' ];

   function checkAvailable(id){
     for (var i = 0; i < tilesInPlay.length; i++) {
       if (tilesInPlay[i] === id) {
         return false
       }
     }
     return true
   }

   $('.col-md-4').click(function() {
     var targetId = (this.id);
      if (checkAvailable(targetId)) {
         turnSymbol === 'O' ? turnSymbol = 'X' : turnSymbol = 'O';
         $('#' + targetId).text(turnSymbol);
         tilesInPlay.push(targetId);
         setTimeout(checkWinner.bind(null, turnSymbol), 1000);
         if (turnSymbol == 'X') {
           setTimeout(ohBot, 1000);
         }
      }
    });

     function checkWinner(turnSymbol) {
       if ($('#topLeft').text() === turnSymbol & $('#topMiddle').text() === turnSymbol & $('#topRight').text() === turnSymbol) {
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#topLeft').text() === turnSymbol & $('#midLeft').text() === turnSymbol & $('#botLeft').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#topLeft').text() === turnSymbol & $('#midMiddle').text()  === turnSymbol & $('#botRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#topMiddle').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#botMiddle').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#topRight').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#botLeft').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#topRight').text() === turnSymbol & $('#midRight').text()  === turnSymbol & $('#botRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#midLeft').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#midRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else if ($('#botLeft').text() === turnSymbol & $('#botMiddle').text() === turnSymbol & $('#botRight').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
         winner = true;
       }
       else {
         if (tilesInPlay.length === 9) {
           winner = true;
           alert('The game is a tie');
         }
       }
     } // End of winner


     function ohBot() { // Computer player
       var indexOf;
       if (winner === false) {
         if ($('#midMiddle').text() === 'O' & $('#topLeft').text() === 'O' & $('#botRight').text() === '') {
           $('#botRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#topMiddle').text() === 'O' & $('#botMiddle').text() === '') {
           $('#botMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#topRight').text() === 'O' & $('#botLeft').text() === '') {
           $('#botLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#midLeft').text() === 'O' & $('#midRight').text() === '') {
           $('#midRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#midRight').text() === 'O' & $('#midLeft').text() === '') {
           $('#midLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#botLeft').text() === 'O' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#botMiddle').text() === 'O' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'O' & $('#botRight').text() === 'O' & $('#topLeft').text() === '') {
           $('#topLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#topMiddle').text() === 'O' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#topRight').text() === 'O' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#midLeft').text() === 'O' & $('#botLeft').text() === '') {
           $('#botLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topRight').text() === 'O' & $('#midRight').text() === 'O' & $('#botRight').text() === '') {
           $('#botRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'O' & $('#midLeft').text() === 'O' & $('#topLeft').text() === '') {
           $('#topLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botRight').text() === 'O' & $('#midRight').text() === 'O' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#botLeft').text() === 'O' & $('#midLeft').text() === '') {
           $('#midLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#topRight').text() === 'O' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'O' & $('#botRight').text() === 'O' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'O' & $('#botRight').text() === 'O' & $('#botMiddle').text() === '') {
           $('#botMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'O' & $('#topRight').text() === 'O' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botRight').text() === 'O' & $('#topRight').text() === 'O' & $('#midRight').text() === '') {
           $('#midRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midLeft').text() === 'O' & $('#midRight').text() === 'O' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topMiddle').text() === 'O' & $('#botMiddle').text() === 'O' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#topLeft').text() === 'X' & $('#botRight').text() === '') {
           $('#botRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#topMiddle').text() === 'X' & $('#botMiddle').text() === '') {
           $('#botMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#topRight').text() === 'X' & $('#botLeft').text() === '') {
           $('#botLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#midLeft').text() === 'X' & $('#midRight').text() === '') {
           $('#midRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#midRight').text() === 'X' & $('#midLeft').text() === '') {
           $('#midLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#botLeft').text() === 'X' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#botMiddle').text() === 'X' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midMiddle').text() === 'X' & $('#botRight').text() === 'X' & $('#topLeft').text() === '') {
           $('#topLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#topMiddle').text() === 'X' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#topRight').text() === 'X' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#midLeft').text() === 'X' & $('#botLeft').text() === '') {
           $('#botLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topRight').text() === 'X' & $('#midRight').text() === 'X' & $('#botRight').text() === '') {
           $('#botRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'X' & $('#midLeft').text() === 'X' & $('#topLeft').text() === '') {
           $('#topLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botRight').text() === 'X' & $('#midRight').text() === 'X' & $('#topRight').text() === '') {
           $('#topRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#botLeft').text() === 'X' & $('#midLeft').text() === '') {
           $('#midLeft').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#topRight').text() === 'X' & $('#topMiddle').text() === '') {
           $('#topMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topLeft').text() === 'X' & $('#botRight').text() === 'X' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'X' & $('#botRight').text() === 'X' & $('#botMiddle').text() === '') {
           $('#botMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botLeft').text() === 'X' & $('#topRight').text() === 'X' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#botRight').text() === 'X' & $('#topRight').text() === 'X' & $('#midRight').text() === '') {
           $('#midRight').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#midLeft').text() === 'X' & $('#midRight').text() === 'X' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else if ($('#topMiddle').text() === 'X' & $('#botMiddle').text() === 'X' & $('#midMiddle').text() === '') {
           $('#midMiddle').trigger('click');
           gameBoard.splice((gameBoard.indexOf()), 1);
         }
         else {
           if (gameBoard.length <= 2) {
             $('#' + gameBoard[0]).trigger('click')
           }
           else {
             var random = gameBoard[Math.floor(Math.random() * gameBoard.length)];
               if ($('#' + random).text() !== '' ) {
                console.log('second random hit is ' + random);
                 gameBoard.splice((gameBoard.indexOf()), 1);
                 ohBot();
               }
               else {
                 $('#' + random).trigger('click');
                 gameBoard.splice((gameBoard.indexOf()), 1);
               }
             }
           }
       }
     } // END of OBOT

  } //END OF CONTROLLER
