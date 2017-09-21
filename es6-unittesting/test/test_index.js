var assert = require('assert');

var path = require('path');

var sum = require(path.resolve(__dirname, "../source/index")).sum;

describe('Calculator', function() {
	describe('NumbersSum()', function() {
		it('should return 3 when arguments are 1, 2', function() {
			assert.equal(3, sum(1,2));
		});
	});

	describe('NegativeNumbersSum()', function() {
		it('should return -1 when arguments are 1, -2', function() {
			assert.equal(-1, sum(1,-2));
		});
	});

	describe('TextsSum()', function() {
		it('should throw error when arguments are texts/strings', function() {
			assert.equal('-1', sum('1','2'));
		});
	});
});
