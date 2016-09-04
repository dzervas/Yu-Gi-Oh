var app = angular.module("Yu-Gi-Oh", [
	"ngRoute"
]);

//app.constant("cardUrl", "https://jsonp.afeld.me/?url=http://yugiohprices.com/api/card_data/");
app.constant("cardUrl", "http://c.vpn:8000/?url=http://yugiohprices.com/api/card_data/");
app.constant("imageUrl", "http://yugiohprices.com/api/card_image/");
app.constant("deck", [
	"Burial from a Different Dimension",
	"Charge of the Light Brigade",
	"Infernoid Antra",
	"Infernoid Attondel",
	"Infernoid Decatron",
	"Infernoid Devyaty",
	"Infernoid Harmadik",
	"Infernoid Onuncu",
	"Infernoid Patrulea",
	"Infernoid Pirmais",
	"Infernoid Seitsemas",
	"Lyla, Lightsworn Sorceress",
	"Monster Gate",
	"One for One",
	"Raiden, Hand of the Lightsworn",
	"Reasoning",
	"Time-Space Trap Hole",
	"Torrential Tribute",
	"Upstart Goblin",
	"Void Seer"
]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "index.html",
			controller: "ctrlDeck"
		})
		.when("/:name", {
			templateUrl: "index.html",
			controller: "ctrlDeck"
		})
});
