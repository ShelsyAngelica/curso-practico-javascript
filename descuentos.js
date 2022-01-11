
// funcion para calcular el precio con descuento
function calcularPrecioConDescuento(precio, descuento){
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento  / 100);
    return precioConDescuento;
}

//funcion cuando dan click en el boton 
function onClickButtonPriceDiscount(){
    var inputPrice = document.getElementById("InputPrice");
    var price = inputPrice.value;

    var inputDiscount = document.getElementById("InputDiscount");
    var discount = inputDiscount.value;

    var InputCoupon = document.getElementById("InputCoupon");
    var coupon = InputCoupon.value;

    
    // validamos el value
    if (inputDiscount.disabled == false) {
        if (discount >0 && discount <100 ){
            var precioConDescuento = calcularPrecioConDescuento(price, discount);

            var resultP = document.getElementById("ResultP");
            resultP.innerHTML = "El precio con descuento son: $" + precioConDescuento;
        }
        else{
            var resultP = document.getElementById("ResultP");
            resultP.innerHTML = "Ingrese un descuento valido  "
        }

    }
    
    if (InputCoupon.disabled == false) {
        switch(coupon){
            case "NewUser":
                var precioConDescuento = calcularPrecioConDescuento(price, 20);

                var resultP = document.getElementById("ResultP");
                resultP.innerHTML = "El precio con descuento son: $" + precioConDescuento;
            break;
                
            case "Summer2022": 
                var precioConDescuento = calcularPrecioConDescuento(price, 15);

                var resultP = document.getElementById("ResultP");
                resultP.innerHTML = "El precio con descuento son: $" + precioConDescuento;
            break;
            
            case "DiscountNewYear": 
                var precioConDescuento = calcularPrecioConDescuento(price, 10);

                var resultP = document.getElementById("ResultP");
                resultP.innerHTML = "El precio con descuento son: $" + precioConDescuento;
            break;

            default:
                console.log("no escogio nada");
            break;
        }
    }

}

// Accedemos al botón
var InputDiscount =  document.getElementById("InputDiscount");
var InputCoupon =  document.getElementById("InputCoupon");
InputCoupon.disabled = true;
InputDiscount.disabled = true ;

// evento para el input radio del "si descuento "
document.getElementById("descuento").addEventListener('click', function(e) {
   
    InputDiscount.disabled = false ;
    InputCoupon.disabled = true;

  });

// evento para el input radio del "si cupon"
document.getElementById("descuentoCupon").addEventListener('click', function(e) {
    
    InputDiscount.disabled = true ;
    InputCoupon.disabled = false;

  });






