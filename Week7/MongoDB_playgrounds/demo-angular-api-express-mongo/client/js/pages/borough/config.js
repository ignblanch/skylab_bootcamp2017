angular.module('restaurantsApp')
  .config(function ($routeProvider) {
    $routeProvider
        .when('/borough/:borough', {
          templateUrl: '/js/pages/borough/template.html',
          controller: 'ListRestaurantsBorough'
        })
  })
