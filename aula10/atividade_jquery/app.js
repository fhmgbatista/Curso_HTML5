
var $inputZipcode = $('input:name["zipcode"]');
var $buttonSearchZicode = $('#search-zipcode');

$inputZipcode.mask('00000-000');
$inputZipcode.

$inputZipcode.on('click', function(e){

	var regZipcode = /\d{5}-\d{3}/;
	var zipcode = $inputZipcode.val();

	if (regZipcode.test(zipcode)) {
		$.ajax({
			url:'http://cep.correiocontrol.com.br/'+zipcode.replace('-', '')+'.json'
			success: function(res)	{
				$addressInputs.removeClass('hidden');
				$addressInputs.find('[name='end']').val(address.logradouro);
				$addressInputs.find('[name='address']').val(address.logradouro);
				$addressInputs.find('[name='address']').val(address.logradouro);
				$addressInputs.fadeIn();
				console.log(address);
			}
			error: function(res)	{
				alert('Endereço não encontrado');
			}

		})

	}
	//console.log($inputZipcode.val());
	//impedindo o evento button de dar refresh na página.
	return false;
});



/*function getEndereco(cep) {
	if($.trim(cep) != "") {
		//$.("#index").html('Pesquisando...');
		$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+cep, function(){
			if (resultadoCEP["resultado"] != 0) {

				$("#cidade").val(unescape(resultadoCEP["cidade"]));
				$("#estado").val(unescape(resultadoCEP["uf"]));
			}else{

				$("index").html(unescape(resultadoCEP["resultado_txt"]));
			}
		});
	}
	else{
		$("index").html('Informe o CEP');
	}

}
*/







