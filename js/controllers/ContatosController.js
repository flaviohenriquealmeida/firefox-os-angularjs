app.controller('ContatosController', function ($scope) {
	
	$scope.contatos = [];

	var manager = window.navigator.mozContacts;
	var req = manager.getAll({});

	req.onsuccess = function() {
		console.log('teste');
		if(this.result) {
			var contato = {
				nome: this.result.name.join(' '), 
				tel: this.result.tel[0].value
			};
			$scope.contatos.push(contato);
			this.continue();
		}
		$scope.$apply();
	};
	
	req.onerror = function() {
		alert('deu erro:' + this.error.name);
	}	
	
	$scope.liga = function(contato) {
		var chamada = new MozActivity({
			name: 'dial', 
			data: {
				number: contato.tel
			}
		});
	};
});