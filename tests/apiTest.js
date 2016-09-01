describe("showcasing a given deck", function() {
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
