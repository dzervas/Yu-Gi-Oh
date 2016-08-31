var app = angular.module("Yu-Gi-Oh");

app.factory("Card", function($http, cardUrl) {
	return {
		get: function(name) {
			return $http.get(cardUrl + name);
		}
	}
})
