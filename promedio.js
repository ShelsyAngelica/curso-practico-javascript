
function calcularMediaAritmetica(lista){
    var sumaLista = 0;

    for (var i = 0; i<lista.length; i++){
    sumaLista = sumaLista + lista[i];
    
    console.log(sumaLista);
    }
    

    var promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
}
////////////////////////////
// tambien podemos reemplazar el for por el metodo reduce,asi;

function calcularMediaAritmetica(lista){
    var sumaLista = lista.reduce(

        //funcion anonima que recibe dos parametros el valorAcumulado (como para empezar no hay valorAcumulado lo inicializamos en 0)
        //nuevoElemento(es el cual integra a medida que itera la lista, el array)
        
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento; 
        }
        
    )

// todo lo demas sigue igual
    var promedioLista = sumaLista / lista.length;
    return promedioLista;
}

