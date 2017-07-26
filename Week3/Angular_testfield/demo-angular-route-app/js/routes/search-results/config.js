 angular.module('myGithubApp')
   .config(function($routeProvider) {

     $routeProvider
       .when('/search/:username', {
       templateUrl: '/js/routes/search-results/template.html',
       controller: 'SearchResultsController'
     })
   })