var gameOfLifeServices = angular.module('leftoverServices', ['ngResource']);

gameOfLifeServices.factory('Pickup', ["$resource",
	return $resource('http://localhost:9393/pickups'), {}, {
		query: {method: 'GET', params: {}, isArray:true}
	});
]);