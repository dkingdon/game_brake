console.log("ttt.js connected")

angular
  .module('games')
  .controller('ticTacToeController', ticTacToeController);

  ticTacToeController.$inject = ['$http'];
  function ticTacToeController ($http) {
    var vm = this;

   var turnSymbol = 'O';
   var tilesInPlay = [];

   function checkAvailable(id){
     for (var i = 0; i < tilesInPlay.length; i++) {
       if (tilesInPlay[i] === id) {
         return false
       }
     }
     return true
   }

   // need logic for the 0-bot

   $('.col-md-4').click(function() {
     var targetId = (this.id);
      var test = checkAvailable(targetId);
      console.log(test);
      // two players
      if (checkAvailable(targetId)) {
         turnSymbol === 'O' ? turnSymbol = 'X' : turnSymbol = 'O';
         $('#' + targetId).text(turnSymbol);
         tilesInPlay.push(targetId);
         console.log(tilesInPlay); // NOTE remove before prod
         setTimeout(checkWinner.bind(null, turnSymbol), 1000);
         setTimeout(ohBot, 1000);

      }
    });

     function checkWinner(turnSymbol) {
       if ($('#topLeft').text() === turnSymbol & $('#topMiddle').text() === turnSymbol & $('#topRight').text() === turnSymbol) {
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#topLeft').text() === turnSymbol & $('#midLeft').text() === turnSymbol & $('#botLeft').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#topLeft').text() === turnSymbol & $('#midMiddle').text()  === turnSymbol & $('#botRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#topMiddle').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#botMiddle').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#topRight').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#botLeft').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#topRight').text() === turnSymbol & $('#midRight').text()  === turnSymbol & $('#botRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#midLeft').text() === turnSymbol & $('#midMiddle').text() === turnSymbol & $('#midRight').text()  === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
       else if ($('#botLeft').text() === turnSymbol & $('#botMiddle').text() === turnSymbol & $('#botRight').text() === turnSymbol){
         alert(turnSymbol + ' is the winner');
       }
     } // End of winner

     var turns = 0;
     function ohBot() {
       var gameBoard = ['topLeft', 'topMiddle', 'topRight', 'midLeft', 'midMiddle', 'midRight', 'botLeft', 'botMiddle', 'botRight'];
       if (turns === 0) {
         var random = gameBoard[Math.floor(Math.random() * gameBoard.length)];
         console.log(random)
        var indexOf = gameBoard.indexOf(random)
           if (random === 'X') {
             gameBoard.spice(index, indexOf);
             random = gameBoard[Math.floor(Math.random() * gameBoard.length)];
             $('#' + random).trigger('click');
             console.log(random)
           }
           else {
             $('#' + random).trigger('click');
             console.log(random)
           }
         turns += 1;
       }
       else if ($('#midMiddle').text() === 'X' & $('#topLeft').text() === 'X') {
         $('#botRight').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#topMiddle').text() === 'X') {
         $('#botMiddle').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#topRight').text() === 'X') {
         $('#botLeft').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#midLeft').text() === 'X') {
         $('#midRight').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#midRight').text() === 'X') {
         $('#midLeft').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#botLeft').text() === 'X') {
         $('#topRight').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#botMiddle').text() === 'X') {
         $('#topMiddle').trigger('click');
       }
       else if ($('#midMiddle').text() === 'X' & $('#botRight').text() === 'X') {
         $('#topLeft').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#topMiddle').text() === 'X') {
         $('#topRight').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#topRight').text() === 'X') {
         $('#topLeft').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#midLeft').text() === 'X') {
         $('#botLeft').trigger('click');
       }
       else if ($('#topRight').text() === 'X' & $('#midRight').text() === 'X') {
         $('#botRight').trigger('click');
       }
       else if ($('#botLeft').text() === 'X' & $('#midLeft').text() === 'X') {
         $('#topLeft').trigger('click');
       }
       else if ($('#botRight').text() === 'X' & $('#midRight').text() === 'X') {
         $('#topRight').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#botLeft').text() === 'X') {
         $('#midLeft').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#topRight').text() === 'X') {
         $('#topMiddle').trigger('click');
       }
       else if ($('#topLeft').text() === 'X' & $('#botRight').text() === 'X') {
         $('#midMiddle').trigger('click');
       }
       else if ($('#botLeft').text() === 'X' & $('#botRight').text() === 'X') {
         $('#botMiddle').trigger('click');
       }
       else if ($('#botLeft').text() === 'X' & $('#topRight').text() === 'X') {
         $('#midMiddle').trigger('click');
       }
       else if ($('#botRight').text() === 'X' & $('#topRight').text() === 'X') {
         $('#midRight').trigger('click');
       }
     } // END of OBOT

  } //END OF CONTROLLER
