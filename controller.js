var app = angular.module("Yu-Gi-Oh");

app.controller("ctrlDeck", function($scope, $route, $routeParams, Card, imageUrl, deck) {
	$scope.cards = {};

	$scope.$on('$routeChangeSuccess', function() {
		console.log("changed", $routeParams.name);
		if (typeof($routeParams.name) !== "undefined")
			Card.get($routeParams.name)
				.success(function(info) {
					info.data["image"] = imageUrl + info.data.name;
					$scope.cardInfo = info.data;
				}).error(function(err) {
					console.log("Failed to get " + name + " card info! Try another card")
				});
	});

	deck.forEach(function(card) {
		Card.get(card)
			.success(function(info) {
				info.data["image"] = imageUrl + info.data.name;
				$scope.cards[card] = info.data;
			}).error(function(err) {
				console.log("Failed to get " + name + " card info. Removing it from deck.")
			});
	});
});
