angular.module("appModule",[])
.controller("AppController", AppController)

AppController.$inject = ['$scope'];

function AppController($scope){
    
    //this.vm -> $scope    
    this.sName = 'Pepe';
    this.sCurso='angularjs';
    console.log(this);
    console.log($scope);

    this.btnBorrar = function(){
        this.sName = '';
    }
}







