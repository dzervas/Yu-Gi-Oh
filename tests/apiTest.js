describe("showcasing a given deck", function() {
	beforeEach(module("Yu-Gi-Oh"));

	it("ensures we can get card info", inject(["Card", function(Card) {
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
			Card.get(validCards[i])
				.success(function(info) {
					expect(info.status == "success").toBeTruthy();
				});
		};

		for (var i in invalidCards) {
			Card.get(invalidCards[i])
				.error(function(info) {
					expect(info.status == "fail").toBeTruthy();
					expect(info.message == "No cards matching this name were found in our database.").toBeTruthy();
				});
		};

	}]));
});
