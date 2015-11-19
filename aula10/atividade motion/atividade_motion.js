var $square = $('.square');

$square.on('click', function() {

	$square
		
		//Função para esconder objeto
		//.transit({opacity: 0}, 400)
		//.transit({opacity: 1});	


		// Função para rotacionar objeto
		//.transit({rotate: '45deg'}, 400)
		//.transit({rotate: '0deg'});

		//  Função para rotacionar objeto, aumentando-o
		.transit({rotate: '+=360deg'}, 2000)
		.transit({rotate: 0});

		/*.transit({scale: [1.3, 1.3]})
		.transit({perspective: '100px', rotateX:'45deg'})

		.transit({rotate: 0})
		.transit({scale: [1.0, 1.0]})
		.transit({perspective: '100px', rotateX:0});*/

		//	Função para rotacionar em 3d meu objeto square
		
		

});