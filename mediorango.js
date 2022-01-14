

function calcularMedioRango (lista){
    
    lista.sort((a,b)=>a-b);
    console.log(lista);
    
    datoMenor = lista[0];
    console.log(datoMenor);
    
    datoMayor = lista[lista.length - 1];
    console.log(datoMayor);
    
    medioRango = (datoMenor + datoMayor) / 2;

    console.log(medioRango);
}
    

  