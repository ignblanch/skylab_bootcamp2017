angular.module('restaurantsApp')
  .controller('ListRestaurantsBorough', function ($scope, ApiService, $routeParams) {
    const { borough } = $routeParams
    $scope.borough = borough
    ApiService.getByBorough(borough)
        .then(restaurants => { $scope.restaurants = restaurants })
  })
