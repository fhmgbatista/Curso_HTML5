
//atividade-regex., jaden style
//http://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
	return this.replace(/(^|\s)(\w)/g, function(match, group1, group2) {
		return group1+(group2).toUpperCase();
	});
};

console.log('fabio fabio'.toJadenCase());

