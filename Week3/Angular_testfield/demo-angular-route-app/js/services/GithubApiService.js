angular.module('myGithubApp')
  .factory('GithubApiService', function($http) {


    function getReposUser(username) {
      var url = 'https://api.github.com/users/' + username + '/repos'
      return $http.get(url)
    }

    return {
      getReposUser: getReposUser
    }


  })