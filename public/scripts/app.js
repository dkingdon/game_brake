console.log('app.js is connected')

angular
  .module('games', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/templates/gamesIndex.html',
        controllerAs: 'gameIndexCtrl',
        controller: 'GameIndexController'
      })
      .when('/ttt', {
        templateUrl: '/views/templates/ticTacToe.html',
        controllerAs: 'tttCtrl',
        controller: 'ticTacToeController'
      })
      // .when('/pokemon', {
      //   templateUrl: '/templates/pokemonIndex.html',
      //   controllerAs: 'pokemonIndexCtrl',
      //   controller: 'PokemonIndexController'
      // })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  } //END OF CONTROLLER
