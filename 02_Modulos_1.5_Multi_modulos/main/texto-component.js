class TextoController {
    $onInit() {
     this.verTexto=false;
     this.precio = 23.60;
    }
}
angular.module("appModule")
.component('appTexto', {
    templateUrl: './main/texto-partial.html',
    controller: TextoController
});