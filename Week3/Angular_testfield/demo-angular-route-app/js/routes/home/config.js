 angular.module('myGithubApp')
   .config( function( $routeProvider ) {

    $routeProvider
      .when('/', {
        templateUrl: '/js/routes/home/template.html',
        controller: 'SearchFormController'
      })

  })
