/////////// Codigo del cuadrado ////////////////////
console.group("Cuadrado");

function perimetroCuadrado(lado){
  return "El perimetro del cuadrado es: " + lado * 4  + "cm";   
}
perimetroCuadrado();

function areaCuadrado (lado){
    return lado * lado + "cm^2"
}
areaCuadrado();
console.groupEnd();


//////////// Codigo del triangulo /////////////
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2,lado3){
    return lado1 + lado2 + lado3;
}
perimetroTriangulo();

function areaTriangulo(base,altura){
    return (base * altura) / 2 ;
}
areaTriangulo();
console.groupEnd();


///////////  Codigo del circulo //////////////
console.group("Circulo");


//Diametro
function diametroCirculo (radio){
    return radio * 2;
}
diametroCirculo();


//PI
const PI = Math.PI;
console.log("PI es: " + PI );

//Circunferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
perimetroCirculo();

//area
function areaCirculo(radio){
    return (radio * radio) * PI ;
}
areaCirculo();

console.groupEnd();

///////////  Codigo del rectangulo //////////////
function perimetroRectangulo(ladoMayor,ladoMenor){
    return (ladoMayor*2)+(ladoMenor*2);
}
perimetroRectangulo();

function areaRectangulo(base, altura){
    return base * altura;
}
areaRectangulo();

//////////// Aqui interactuamos con HTML //////////////

/////////// Codigo del cuadrado ////////////////////
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //nos permite obtenerel elemento de HTML
    const value = input.value; // accedemos al valor, a su propiedad value
    

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); //nos permite obtenerel elemento de HTML
    const value = input.value; // accedemos al valor, a su propiedad value
    

    const area = areaCuadrado(value);
    alert(area);
}

//////////// Codigo del triangulo /////////////
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1"); //nos permite obtenerel elemento de HTML
    const valueLado1 = parseInt(inputLado1.value); // accedemos al valor, a su propiedad value
    
    const inputLado2 = document.getElementById("InputTrianguloLado2"); //nos permite obtenerel elemento de HTML
    const valueLado2 = parseInt(inputLado2.value); 

    const inputLado3 = document.getElementById("InputTrianguloLado3"); //nos permite obtenerel elemento de HTML
    const valueLado3 = parseInt(inputLado3.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueLado3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase"); //nos permite obtenerel elemento de HTML
    const valueBase = parseInt(inputBase.value); // accedemos al valor, a su propiedad value

    const inputAltura = document.getElementById("InputTrianguloAltura"); //nos permite obtenerel elemento de HTML
    const valueAltura = parseInt(inputAltura.value); // accedemos al valor, a su propiedad value

    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}

///////////  Codigo del circulo //////////////

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = parseInt(inputRadio.value);

    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}
function calculaPerimetroCirculo(){
    const inputRadio2 = document.getElementById("InputCirculoRadio2");
    const valueRadio2 = parseInt(inputRadio2.value);

    const perimetro = perimetroCirculo(valueRadio2);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const inputRadio3 = document.getElementById("InputCirculoRadio3");
    const valueRadio3 = parseInt(inputRadio3.value);

    const area = areaCirculo(valueRadio3);
    alert(area);
}

///////////  Codigo del rectangulo //////////////

function calcularPerimetroRectangulo(){
    const inputLadoMayor = document.getElementById("InputRectanguloLadoMayor");
    const valueLadoMayor = inputLadoMayor.value
    
    const inputLadoMenor = document.getElementById("InputRectanguloLadoMenor");
    const valueLadoMenor = inputLadoMenor.value

    const perimetro = perimetroRectangulo(valueLadoMayor,valueLadoMenor)
    alert(perimetro);
}
function calcularAreaRectangulo(){
    const inputBase =  document.getElementById("InputRectanguloBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputRectanguloAltura");
    const valueAltura = inputAltura.value;

    const area = areaRectangulo(valueBase,valueAltura)
    alert(area)
}