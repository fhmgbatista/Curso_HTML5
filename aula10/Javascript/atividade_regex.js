//Atividade de Regex para validar CPF

var cpf1 = '139.833.458-83';
var cpf2 = '139.833.458/0000-83';
var regCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

//regCPF.test(cpf1); // => return true
//regCPF.test(cpf2); // => return false

console.log (regCPF.test(cpf1));
console.log (regCPF.test(cpf2));


var tel1 = '(11) 4153-5002'
var tel2 = '4153-3559'
var tel3 = '98148-1679'
//var regtel = /^\(\d{2}\)\s\d{4}\-\d{4}$/g;
var regtel = /^([7-9])?\d{4}\-\d{4}$/g

console.log (regtel.test(tel1));
console.log (regtel.test(tel2));
console.log (regtel.test(tel3));