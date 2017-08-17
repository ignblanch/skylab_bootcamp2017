angular.module('restaurantsApp')
  .controller('ListRestaurants', function ($scope, ApiService) {
    ApiService.getAllRestaurants()
          .then(restaurants => { $scope.restaurants = restaurants })
  })
