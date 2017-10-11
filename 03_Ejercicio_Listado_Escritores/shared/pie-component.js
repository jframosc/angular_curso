class PieController{
    constructor(){};

    $onInit(){
        this.sCurso='AngularJS'; 
    }
}

angular.module("SharedModule")
.component('appPie', {
    template:`  <footer>
                <p>Curso de {{$ctrl.sCurso}}</p>    
                </footer>`,
    controller: PieController,
    //Lo comento porque crtl es el valor predeterminado
    //controllerAs: '$ctrl',
    
});