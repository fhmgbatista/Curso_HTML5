process.stdout.write('\033c');
var Comanda = {

	items: [
		{name:'Coxinha',amount:2,value:2.5},
		{name:'Coca',amount:1,value:7.1}
	],

	calcTotal: function(){
		var total = 0;
		Comanda.items.forEach(function(item, index){
		var totalItem = item.amount * item.value;
		total += totalItem;
		});
		return total;
	},

	formatterAsReal: function(number) {

	return 'R$ ' + number.toFixed(2).replace('.',',');

	},

	print: function(){
	
	console.log('Qtd. \tProduto \tPreco Unit.');
	
	Comanda.items.forEach(function(item) {
		console.log ('%s \t%s \t%s', item.amount, item.name, Comanda.formatterAsReal(item.value));
	});
	console.log('\nTotal:\t\t\t%s', Comanda.formatterAsReal(Comanda.calcTotal()));

	}



};

Comanda.print();

//console.log(Comanda.formatterAsReal(5.2));