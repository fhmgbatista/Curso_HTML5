'use strict';

var expect = require('chai').expect;
var stringUtils = require('../../index.js');

console.log(stringUtils);

describe('test methods', function() {
		it('should have property uppercase', function() {
			expect(stringUtils)
				.to.be.have.property('uppercase')
				.to.be.an('function');
		});

		it('should have property lowercase', function() {
			expect(stringUtils)
				.to.be.have.property('lowercase')
				.to.be.an('function');
		});

});

describe('test return values of methods', function() {
		it('should return string in lowercase', function() {
			expect(stringUtils.lowercase('Fabio Heberty'))	
				.to.be.equal('fabio heberty');
		});
});

describe('test return values of methods', function() {
		it('should return string in uppercase', function() {
			expect(stringUtils.uppercase('fabio heberty'))	
				.to.be.equal('FABIO HEBERTY');
		});
});

describe('errors when not pass a string has argument', function() {
	it('errors argument string required', function () {
		expect(function() {stringUtils.uppercase([]);})
			.to.throw('argument string is required');
	});
});