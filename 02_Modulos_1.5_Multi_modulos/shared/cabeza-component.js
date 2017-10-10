class CabezaController{

    constructor(){};

    $onInit(){
        this.sTitulo = 'Hola Mundo';
     };
    //$onChanges(changesObject){ };
    //$onDestroy(){ };
}

angular.module("SharedModule")
.component('appCabeza', {
    template:`<header>
                <h1>{{$ctrl.sTitulo}}</h1>
             </header>`,
    controller: CabezaController,
    //controllerAs: '$ctrl',
    
});
