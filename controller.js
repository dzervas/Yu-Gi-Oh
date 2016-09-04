var app = angular.module("Yu-Gi-Oh");

app.controller("ctrlDeck", function($scope, $q, $route, $routeParams, Card, imageUrl, deck) {
	var proms = [];
	$scope.cards = {};

	$scope.$on('$routeChangeSuccess', function() {
		if (typeof($routeParams.name) != "undefined") {
			$q.all(proms).then(function() {
				$scope.cardInfo = $scope.cards[$routeParams.name];
			});
		}
	});

	deck.forEach(function(card) {
		proms.push(Card.get(card));
		proms[proms.length - 1].success(function(info) {
			info.data["image"] = imageUrl + info.data.name;
			$scope.cards[card] = info.data;
		});
		proms[proms.length - 1].error(function(err) {
			console.log("Failed to get " + card + " card info. Removing it from deck.");
		});
	});

	$scope.atkStance = function() {
		$scope.divImg = "col-md-4";
		$scope.divInfo = "col-md-8";
	}

	$scope.defStance = function() {
		$scope.divImg = "col-md-6 rotate";
		$scope.divInfo = "col-md-6";
	}

	$scope.atkStance();
});
