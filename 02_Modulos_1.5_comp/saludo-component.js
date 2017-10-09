angular.module("appModule")


class SaludoController {
    
    constructor($scope){
        this.$scope = $scope;
    }
    
    $onInit(){
        this.sName = 'Pepe';
        console.log(this);
    }

    btnBorrar (){
        this.sName = '';
    }
}


angular.module("appModule")
.component('appSaludo', {
    templateUrl:'partial.html',
    controller: SaludoController,
    controllerAs: 'vm',
});


