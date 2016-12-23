console.log("hangman.js connected")

angular
  .module('games')
  .controller('hangmanController', hangmanController);

  hangmanController.$inject = ['$http'];
  function hangmanController ($http) {
    var vm = this;
    vm.newBook = {};

  } //END OF CONTROLLER
