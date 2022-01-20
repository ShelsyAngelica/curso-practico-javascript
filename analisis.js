// HELPERS
//Funcion para saber si es par o impar nuestro array
// Este codigo lo podemos reducir 
//function esPar(numerito){
//    //si el modulo del numero divido entre 2 nos da 0, es par
//    if (numerito % 2 === 0){
//
//        return true;
//    }
//
//    else{
//        return false;
//    }
//}

//asi
function esPar(numerito){
    //si el modulo del numero divido entre 2 nos da 0, es par y nos retornara true
    //de lo contrario false
    return (numerito % 2 === 0);
}

//
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

//Calculadora de mediana
function medianaSalary(lista){
    var mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        // si es par, necesitamos a las dos personitas del centro 
        // por ende utilizamos la personita de la mitad y la personita de adelante, y para hallarlo restamos 1
        var personitaMitad1 = lista[mitad -1];
        var personitaMitad2 = lista[mitad];

        var mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }

    //si no es par, la personita de la mitad sera la que en la lista esta en la poscision de la mitad 
    // y la recibimos en var mitad
    else {
        var personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// array que tenga solo los salarios
// por medio  del metodo .map accedems a ese dato 
//salariosCol,son solos los salarios de las personas
var salariosCol = colombia.map(
    //.map itera dentro de colombia
    //funcion anomina
    function(personita){
        return personita.salary;
    }
    
    
);
console.log(salariosCol); 

//Creamos una variable donde vamos guardar los salarios organizados
// con el metodo sortque recibe una funcion anonima como parametro  y empieza acomparar cada unodelossalrios para ubicarlos segun corresponda
//salaryColSorted salarios organizados de menor a mayor
salaryColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
})

console.log(salaryColSorted);

//Mediana General
//guardo la mediana general de salarios de mi lista en una var
var medianaGeneralCol = medianaSalary(salaryColSorted);



//Mediana top 10%



// var spliceStart donde guardamos la primera posicion
                //cantidad de personas(100%) * 90 (100%- 10%) y lo dividimos entre 100
var spliceStart = (salaryColSorted.length * 90) / 100;

//cantidad de posiciones que vamos a necesitar 
                //cantidad de personas - cantidad de posiciones restantes, serian el top 
var spliceCount = salaryColSorted.length - spliceStart;

// var deltop 10 de salarios en colombia
// funcion splice recibe dos arguentos desde donde y cuantas 
var salarioColtop10 = salaryColSorted.splice(spliceStart,spliceCount);


var medianaTop10Col = medianaSalary(salarioColtop10);

console.log({
    medianaGeneralCol,
    salarioColtop10
});