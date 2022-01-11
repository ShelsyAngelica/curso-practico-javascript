
function esPar(numerito){
    //si el modulo del numero divido entre 2 nos da 0, es par
    if (numerito % 2 === 0){

        return true;
    }

    else{
        return false;
    }
}

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


function calcularMediana(lista){

    var listaOrganizada = lista.sort((a,b)=>a-b);
    
    //lo colocamos dentro de parseInt para que el numero sea entero y no un decimal
    var mitadListaOrganizada = parseInt(listaOrganizada.length / 2);
    

    if (esPar(lista.length)){

        var elemento1 = listaOrganizada[mitadListaOrganizada - 1];
        var elemento2 = listaOrganizada[mitadListaOrganizada ];
    
        var promedioElemento1y2 = calcularMediaAritmetica ([elemento1,elemento2]);
    
        mediana = promedioElemento1y2;
        return mediana
    }
    else{
        mediana = listaOrganizada[mitadListaOrganizada]
        return mediana
    }

}


var mediana;






