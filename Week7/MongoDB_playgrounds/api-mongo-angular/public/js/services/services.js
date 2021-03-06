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

    function byBorough (borough, page) {
      let url = `/api/restaurants/borough/${borough}?page=${page}`
      return $http.get(url)
    }

    function getLengthByBorough (borough) {
      return $http.get(`/api/restaurants/borough/${borough}?limit=null`)
    }

    return {
      loadRestaurants: loadRestaurants,
      getRestLength: getRestLength,
      byBorough: byBorough,
      getLengthByBorough: getLengthByBorough

    }
  })
