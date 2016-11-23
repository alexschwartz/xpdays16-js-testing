describe('DOManipulation test suite', function() {

	describe('manipulateSomething()', function() {
		it('sets a new text', function() {
			jasmine.getFixtures().set('<p id="someId"></p>');
			manipulateSomething();
			expect($('#someId')).toHaveText('new text');
		});
	});
});