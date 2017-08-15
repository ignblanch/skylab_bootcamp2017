/* global angular */

angular.module('restaurantsApp')
  .controller('restaurantController', function ($scope, $http, RestaurantService) {
    $scope.page = 1
    getLength()

    function getLength () {
      RestaurantService.getRestLength()
        .then(function (response) {
          console.log(response.data.length)
          $scope.numPages = Math.floor((response.data.length) / 10)
        })
    }

    function loadRestaurants () {
      RestaurantService.loadRestaurants($scope.page)
        .then(function (response) {
          $scope.restaurants = response.data
          console.log($scope.restaurants)
        })
    }

    loadRestaurants()

    function pageDown () {
      console.log('enter pageDown')
      if ($scope.page > 1) {
        $scope.page--
        loadRestaurants()
      }
    }

    function pageUp () {
      if ($scope.page < $scope.numPages) {
        console.log('enter pageUP')
        $scope.page++
        loadRestaurants()
      }
    }

    $scope.pageDown = pageDown
    $scope.pageUp = pageUp
  })
