angular.module('restaurantsApp')
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/js/pages/home/template.html',
          controller: 'ListRestaurants'
        })
  })
