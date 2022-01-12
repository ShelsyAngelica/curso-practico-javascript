
function calcularModa(lista1){
    //creamos un objeto para guardar la cantidad de veces se repite cada numero
    var lista1Count = {};

    //metodo map va a recorrer el array 
    //map recibe una funcion como parametro,una funcion anonima en este caso 
    lista1.map(
    // en la funcion recibimos un parametro, que es el elemento de cada iteracion 
    function (elemento){
       
       //validamos si el elemento ya existe como un un elemento dentro del objeto
       if (lista1Count[elemento]){
        //llamamos a esta misma posicion dentro de lista1Count y le sumamos 1
        //asi es como le sumamos 1 a cada una de las posiciones dentro de nuestro objeto cuando se repite 
        lista1Count[elemento] += 1;
       }

       else{
        //cuando no existe todavia, vamosa crear el elemento y que por defecto solo ha aparecido una vez
        //le decimos a lista1Count que guarde un valor que se llame igual a nuestro elemento
        lista1Count[elemento] = 1;

       }
        

    }
);


    // aca vamos a convertir el objeto en un array, y en este array ver el elemento mas grande
    //Utilizamos el metodo Object.entries(), donde le enviamos como argumento el objeto que queremos convertir en un array
    // Usamos la funcion sort para iterar por cada uno de los elementos del array y encontrar la posicion que mas se repita, el mas grande
    var lista1Array = Object.entries(lista1Count).sort(
        //el metodo sort recibe una funcion anonima, que recibe 2 parametros 
        function(valorAcumulado, nuevoValor){
            //lista1Array es un array que por dentro tiene otro array 
            //en la1 posicion tenemos cada elemento dentro de nuestro array y en la 2 posicion tenemos la cantidad de veces que se repite ese numero 
            return valorAcumulado[1] - nuevoValor[1]
        }
);

    //la moda es la ultima posicion del array lista1Array
    //recordemos que empezamos a contar desde0 y sinuestro array tiene 5 elementos la ultima posicion es 4 ,por eso le restamos 1
    var moda = lista1Array[lista1Array.length - 1];
    return "La moda es " + moda[0]+ " porque se repite " + moda[1];
}
