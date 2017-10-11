
class AppController {

	constructor($http) {
		this.$http = $http;
	}

	buscarPaises () {
		// solicita por AJAX los datos del continente seleccionado
		console.log(this);

		this.$http({method : 'GET', url: this.url})
		//this.$http.get($scope.url)
		.then( response => {	
			this.aPaises = response.data;

			//var that = this;
			//.then(function(response){that.aPaises = response.data;});
		});
	} // Fin de la función buscarPaises 

}

angular.module("appModule", [])
.controller('AppController', AppController)




