class AppController {

    constructor($scope){
      this.$scope = $scope;
    }
    
    $onInit(){
        this.sName = 'Pepe';
        this.sCurso='angularjs';
        console.log(this);
        console.log(this.$scope);
    }

    btnBorrar (){
        this.sName = '';
    }
}


angular.module("appModule",[])
.controller("AppController", AppController)
