'use strict';

angular
	.module('example')
	.controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController ($scope) {

	$scope.name = 'Fabinho';
	$scope.sayName = function() {
		alert('Fabito');
	}

	$scope.courses = [
	'HTML5',
	'CSS3',
	'Javascript'
	];

	$scope.addCourse = function() {

		if ($scope.course && $scope.courses.indexOf($scope.course) < 0) {
			$scope.courses.push($scope.course);
			$scope.course = undefined;	
		}
	}
}
