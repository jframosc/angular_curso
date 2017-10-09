angular.module("appModule",[])

class AppController {
    $onInit(){
        this.sCurso='angularjs';
    }
}

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
.controller("AppController", AppController);

angular.module("appModule")
.component('appSaludo', {
    templateUrl:'partial.html',
    controller: SaludoController,
    controllerAs: 'vm',
});


