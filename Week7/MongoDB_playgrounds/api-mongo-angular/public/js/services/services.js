/* global angular */

angular.module('restaurantsApp')
  .factory('RestaurantService', function ($http) {
    function loadRestaurants (page) {
      let url = `/api/restaurants?page=${page}`
      return $http.get(url)
    }

    function getRestLength () {
      return $http.get(`/api/restaurants?limit=null`)
    }

    return {
      loadRestaurants: loadRestaurants,
      getRestLength: getRestLength
    }
  })
