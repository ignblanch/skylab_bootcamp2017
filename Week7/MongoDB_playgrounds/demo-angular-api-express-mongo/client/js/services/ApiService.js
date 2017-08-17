angular.module('restaurantsApp')
  .factory('ApiService', function ($http) {
    function getAllRestaurants () {
      return $http.get('/api/restaurants')
              .then(response => response.data)
    }

    function getByBorough (borough) {
      return $http.get(`/api/restaurants/borough/${borough}`)
              .then(response => response.data)
    }

    return { getAllRestaurants, getByBorough }
  })
