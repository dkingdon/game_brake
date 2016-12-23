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
      // .when('/books/:id', {
      //   templateUrl: '/templates/book-show.html',
      //   controllerAs: 'bookShowCtrl',
      //   controller: 'BookShowController'
      // })
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
