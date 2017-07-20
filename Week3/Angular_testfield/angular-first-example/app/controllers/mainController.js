var app = angular.module('simpleApp')
	app.controller('myController', function($scope){
		$scope.myMessage = " HI!! 😆"
	})
	app.controller('mySecondController', function($scope){
		$scope.myMessage = " Other message here...!! ❤️"
	})
	app.controller('calculatorController', function($scope){
		$scope.calculate = function(){
			$scope.result = $scope.num1 + $scope.num2
		}
	})