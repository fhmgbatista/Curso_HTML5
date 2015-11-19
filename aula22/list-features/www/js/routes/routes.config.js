'use strict'

angular
	.module('starter')
	.config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('list', {
			url: '/',
			templateUrl: 'templates/list.html'
		})
		.state('list-feature', {
			url: '/list/detail/:id',
			templateUrl: 'templates/list-feature.html'
		})
		.state('actionSheet', {
			url: '/feature/action-sheet',
			templateUrl: 'templates/action-sheet.html',
			controller: 'actionSheetController'
		});
}	


