angular
	.module('atividade')
	.controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController($scope) {

	$scope.drinks = [
	'Budwieser',
	'Whisky',
	'Skol'
	];
	
}
