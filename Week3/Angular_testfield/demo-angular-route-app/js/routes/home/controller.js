angular.module('myGithubApp')
  .controller('SearchFormController', function( $scope, $location) {

    $scope.query = ''

    $scope.getSearchQuery = function() {
      var query = $scope.query;
      $location.path('/search/' + query);
    }

  })