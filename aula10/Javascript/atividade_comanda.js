process.stdout.write('\033c');
var varTotal = 0;

var arr=[
	{name:'Coxinha',amount:2,value:2.50},
	{name:'Coca',amount:1,value:7}
];

console.log('Comanda:');
console.log('Qtd. 	Produto		Preco Unit.');

for (var i = 0; i  < arr.length; i++) {
	console.log(arr[i].amount + '\t' + arr[i].name + '\t\tR$ ' +  arr[i].value.toFixed(2));
	varTotal=varTotal + arr[i].value;
};

console.log('Total:\tR$ ' + varTotal.toFixed(2));	