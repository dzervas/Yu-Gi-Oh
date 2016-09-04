describe("showcasing a given deck", function() {
	beforeEach(module("Yu-Gi-Oh"));
	//beforeEach(function() {
		//browser().navigateTo('/');
	//});

	//it("ensures we show the whole deck", inject(function(deck) {
		//browser().navigateTo("#/");
		//console.log(element("#sideDeck").children.length);
		//expect(element("#sideDeck").children.length).toBe(deck.length);
	//}));

	it("ensures we can get card info", inject(["Card", function(Card) {
		expect(Card.get).not.to.equal(null);

		validCards = [
			"Lyla, Lightsworn Sorceress",
			"Monster Gate",
			"One for One",
		];

		invalidCards = [
			"LylaLightsworn Sorceress",
			"MonsterxGate",
			"One+for+One",
		];

		for (var i in validCards) {
			var info = Card.get(validCards[i]);
			expect(info.status == "success").toBeTruthy();
		};

		for (var i in invalidCards) {
			var info = Card.get(invalidCards[i]);
			expect(info.status == "fail").toBeTruthy();
			expect(info.message == "No cards matching this name were found in our database.").toBeTruthy();
		};

	}]));
});
