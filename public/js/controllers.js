'use strict';

var gameOfLifeControllers = angular.module('gameOfLifeControllers',[]);

gameOfLifeControllers.controller('gameOfLifeCtrl', ['$scope','$http',
	function($scope, $http){
    $scope.getBoard = function(){
      $http.get('http://localhost:9292/gol').success(function(data, status, headers, config) {
          $scope.board = data;
        });
    
    $scope.play = function(){ 
          console.log("playing!");
          setInterval(function(){
            $scope.getBoard();
          }, 11);
    }
    }   
}]);

gameOfLifeControllers.controller('gameOfLifeForCtrl', ['$scope','$http','$routeParams',
  function($scope, $http, $routeParams){
    $scope.getBoard = function(){
      $http.get('http://localhost:9292/gol/' + $routeParams.formation).success(function(data){
           $scope.board = data;
        });
  }

   $scope.play = function(){ 
          console.log("playing!");
          setInterval(function(){
            $scope.getBoard();
          }, 11);
    }
}]);