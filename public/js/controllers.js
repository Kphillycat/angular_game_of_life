'use strict';

var gameOfLifeControllers = angular.module('gameOfLifeControllers',[]);

gameOfLifeControllers.controller('gameOfLifeCtrl', ['$scope','$http',
	function($scope, $http){
    $scope.getBoard = function(){
      $http.get('http://localhost:9292/gol').success(function(data, status, headers, config) {
          $scope.board = data;
        });
    };

    $scope.getBoard();

}]);





































// var spacecatControllers = angular.module('spacecatControllers', []);

// spacecatApp.controller('CatListCtrl', ['$scope', '$http',
//   function($scope, $http){
//     $http.get('http://localhost:9393/spacecats').success(function(data) {
//       $scope.cats = data;
//     });
 
//     $scope.orderProp = 'name';
//   }]);

// spacecatControllers.controller('CatDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get("cats/cats-" + $routeParams.catId + '.json').success(function(data) {
//       $scope.cat = data[0];
//       $scope.mainImg = data[0].images[0];
//     });

//     $scope.setImage = function(imageName) {
//       $scope.mainImg = imageName;
//     }
//   }]);