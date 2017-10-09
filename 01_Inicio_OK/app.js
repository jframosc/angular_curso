angular.module("appModule",[])
.controller("AppController", ["$scope",function($scope){
    $scope.sName = 'Pepe';
    $scope.sCurso='angularjs';

    $scope.btnBorrar = function(){
        $scope.sName = '';
    }
}])