 angular.module('myGithubApp')
  .controller('SearchResultsController', function($scope, $routeParams, GithubApiService) {

    var username = $routeParams.username

    GithubApiService.getReposUser(username)
      .then(function(response) {
        $scope.repos = response.data
      })

  })