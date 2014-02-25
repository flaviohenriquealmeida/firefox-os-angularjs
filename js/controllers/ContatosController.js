app.controller('ContatosController', function ($scope) {

	$scope.contatos = [];


	var manager = window.navigator.mozContacts;
	var req = manager.getAll({});

	req.onsuccess = function() {
		if(this.result) {
			var mcNome = this.result.name.join(' ');
			var mcTel = this.result.tel[0].value;
			console.log(name);
			$scope.contatos.push({nome: mcNome, tel: mcTel});
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