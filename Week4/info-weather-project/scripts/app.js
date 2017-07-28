angular.module('infoWeatherApp', ['ngRoute'])
	
	.config (function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/search.html'
        // controller: 'SearchController as searchCtrl'
      })
        .when('/results/:query', {
          templateUrl: 'templates/results.html'
         // controller: 'ResultsController as resultsCtrl'
      })
})
  