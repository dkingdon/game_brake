console.log('GamesIndex.js is connected');
angular
  .module('games')
  .controller('GameIndexController', GameIndexController);

  GameIndexController.$inject = ['$http'];
  function GameIndexController ($http) {
    var vm = this;
    vm.newBook = {};



  } //END OF CONTROLLER
