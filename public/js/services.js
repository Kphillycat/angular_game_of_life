var gameOfLifeServices = angular.module('leftoverServices', ['ngResource']);

gameOfLifeServices.factory('getBoard', ["$resource",
	return $resource('http://localhost:9292/gol'), {}, {
		query: {method: 'GET', params: {}, isArray:true}
	});
]);