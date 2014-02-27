'use strict';

var gameOfLifeApp = angular.module('gameOfLifeApp',['ngRoute',
'gameOfLifeControllers']);

gameOfLifeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "partials/home.html",
		controller: "gameOfLifeCtrl"
	}).when("/play",{
			templateUrl: "partials/play.html",
			controller: "gameOfLifeCtrl"
	}).when("/play/:formation",{
      templateUrl: "partials/play.html",
      controller: "gameOfLifeForCtrl"
  }).otherwise({redirectTo: "/"});

}]);































// var spacecatApp = angular.module('spacecatApp', [
//   'ngRoute',
//   'spacecatControllers',
//   'spacecatFilters'
// ]);

// spacecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/cats', {
//         templateUrl: 'partials/cat-list.html',
//         controller: 'CatListCtrl'
//       }).
//       when('/cats/:catId', {
//         templateUrl: 'partials/cat-detail.html',
//         controller: 'CatDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/cats'
//       });
//   }]);