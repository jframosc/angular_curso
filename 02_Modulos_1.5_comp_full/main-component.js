angular.module("appModule")

class AppController {
    $onInit(){
        this.sCurso='angularjs';
    }
}



angular.module("appModule")
.controller("AppController", AppController)
.component('appMain', {
    templateUrl:'main-partial.html',
    controller: MainController,
    controllerAs: 'vm',
});




