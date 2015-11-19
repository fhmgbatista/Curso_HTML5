
var maskify = function(str) {
	var last4reg = /.{0,4}$/; // Peqgue os últimos 4 caracteres de 0 a 4
	var last4 = str.match(last4reg);
	return str.replace(/./g, '#').replace(last4reg, last4);

};

process.stdout.write('\033c'); //limpa os logs anteriores
console.log(maskify('fabio heberty'));

