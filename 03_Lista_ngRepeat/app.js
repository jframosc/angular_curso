angular.module("appModule", [])
.controller("ListaController",function($scope){

    $scope.lista=[];
    $scope.element='';

    $scope.addIdea = function(){
        $scope.lista.push($scope.element);
        $scope.element='';
    }

});