
PrincipalApp.controller('CidadeEstadoController', CidadeEstadoController);

function CidadeEstadoController(brCidadesEstados) {
    var vm = this;
    vm.states = brCidadesEstados.estados;
    vm.buscarCidadesPorSigla = function(sigla){
        vm.cities = brCidadesEstados.buscarCidadesPorSigla(sigla);
        
    };
    
    //console.log(vm);
}

/*
PrincipalApp.controller('CidadeEstadoController', function($scope, brCidadesEstados) {
	

	
	$scope.salvar = function(estado, city){
		function CidadeEstadoController(brCidadesEstados) {
		    var vm = this;
		    vm.states = brCidadesEstados.estados;
		    vm.buscarCidadesPorSigla = function(sigla){
		        vm.cities = brCidadesEstados.buscarCidadesPorSigla(sigla);
		    };
		    
		}
		console.log(estado, city);
	};
});
*/