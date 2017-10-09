//ejemplo de codigo en ES6

var data= [{precio:12},{precio:34},{precio:19}];

data.forEach( elem =>{
    if(true){
        const iva = 1.16;
        let precio_final = elem.precio*iva;

        console.log(`Oferta: El precio final es ${precio_final}`);
    }
    //console.log(precio_final);

});