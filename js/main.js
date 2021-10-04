// // Desafio Clase 4: Simulador Interactivo

// Funcion SALUDAR al usuario:

function saludar (nombre) {
    nombre = prompt("Hola, por favor escribe tu nombre:");
    nombre = nombre.toUpperCase();
    alert(
    `Bienvenid@ ${nombre} a DeLa.Huerta!
    La mejor calidad en frutas y verduras.
    Directo a tu hogar!`);
}
saludar();

/* ---------------------------------------------------------------------------------------*/

// FUNCIÓN resumen del pedido:

function sumaCosto(producto,costo,costoTotal) {
    alert(
        `Mi pedido:
        
        + ${producto} $${costo} 
        
        Total acumulado: $${costoTotal}`);
        return costoTotal;
}

// FUNCIÓN sumaCosto del pedido: actualiza el monto total a pagar //

function armarLista(texto = "Ingresa el producto que quieras agregar a tu lista") {
    let = listaProductos = Number(prompt(
        `${texto}:
        
        1 - Bolsón de frutas (1kg)                   $1.200
        2 - Bolsón de verduras (1kg)               $1.000
        3 - Bolsón de frutas y verduras (2kg)   $2.000
        
        0 - Finalizar lista
        
        `));
        return listaProductos;
}
let costoProductos = armarLista();

// Sentencia WHILE + SWITCH para agregar productos a la lista y finalizar el proceso mostrando con un alert el Costo Total del pedido:

let producto;
let costo;
let costoTotal = 0;
let conteo = 0;

while(costoProductos != 0) {

    switch(costoProductos) {
        case 1:
            producto = "Bolsón de frutas (1kg)";
            costo = 1200;
            costoTotal += costo;
            conteo = sumaCosto(producto,costo,costoTotal);
            costoProductos = armarLista();
            break; 

        case 2:
            producto = "Bolsón de verduras (1kg)";
            costo = 1000;
            costoTotal += costo;
            conteo = sumaCosto(producto,costo,costoTotal);
            costoProductos = armarLista();
            break; 

        case 3:
            producto = "Bolsón de frutas y verduras (2kg)";
            costo = 2000;
            costoTotal += costo;
            conteo = sumaCosto(producto,costo,costoTotal);
            costoProductos = armarLista();
            break; 

        default:
            costoProductos = armarLista("La opción ingresada es incorecta");
            break;    
    }
}

alert(`PEDIDO FINALIZADO. Costo Total: $${conteo}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCIÓN para elegir cantidad de cuotas (PASO 2):

function tarjetaCredito () {
    function montoEnCuotas(text = "Elige en cuantas cuotas deseas abonar") {
        let cantDeCuotas = Number(prompt(
            `${text}:
            
            1 - En 1 cuota: $${conteo}. Total: $${conteo}
            2 - En 2 cuotas de $${(conteo * 1.05)/2} c/u. Total: $${conteo * 1.05}
            3 - En 3 cuotas de $${(conteo * 1.1)/3} c/u. Total: $${conteo * 1.1}
            
            0 - Ninguna. Finalizar transacción
            
            `));
            return cantDeCuotas;
    }
    let misCuotas = montoEnCuotas();
    
    // Sentencia WHILE y SWITCH para calcular monto de las cuotas elegidas:
       
    switch (misCuotas) {
        case 0:
            alert(`
                Lamentamos que no haya concretado su compra.
                Que tenga un buen día!`);
                break;
        case 1:
            conteo *= 1;
            alert(`Monto total a pagar en 1 cuota: $${conteo}`);
            alert(`Su pago se registró con éxito. Le enviamos a ${mailUsuario} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);
            break;

        case 2:
            conteo *= 1.05;
            alert(`Monto total a pagar: $${conteo}. En 2 cuotas de $${conteo/2} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${mailUsuario} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);      
        break;

        case 3:
            conteo *= 1.1;
            alert(`Monto total a pagar: $${conteo}. En 3 cuotas de $${conteo/3} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${mailUsuario} el comprobante de pago.`); 
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);        
            break;

        default:
            misCuotas = montoEnCuotas("La opción ingresada es incorecta");
            break;
    }
}

/* ---------------------------------------------------------------------------------------*/

// FUNCION menu para eligir metodo de pago (PASO 1):

function formasDePago (mensaje = "Elige una forma de pago") {
    let formasLista = Number(prompt(
        `${mensaje}:
        
        1 - Tarjeta de Débito
        2 - MercadoPago
        3 - PagoFacil
        4 - RapiPago
        5 - Tarjeta de Crédito
        
        0 - Ninguna. Finalizar transacción
        
        `));
        return formasLista;
}
let pagoEn = formasDePago();

// Sentencia WHILE + SWITCH para calcular monto a pagar segun el medio de pago elegido por el usuario:

let mailUsuario;

switch (pagoEn) {
    
    case 0:
        alert(`
            Lamentamos que no haya concretado su compra.
            Que tenga un buen día!`);
            break;
    case 1:
        alert(`El monto total a pagar es: $${conteo}. A continuación le pediremos sus datos:`);
        prompt("Ingrese numero de tarjeta:");
        prompt("Ingrese numero de documento:");
        prompt("Ingrese fecha de vecimiento de tarjeta:");
        prompt("Ingrese clave de tarjeta:");
        mailUsuario = prompt("Ingrese su casilla de mail:");
        alert(`Su pago se registró con éxito. Le enviamos a ${mailUsuario} el comprobante de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;
    case 2:
    case 3:
    case 4:
        mailUsuario = prompt("Ingrese su casilla de mail:");
        alert(`Listo! Le enviamos a ${mailUsuario} el link de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;

    case 5:
        alert(`El monto total a pagar es: $${conteo}. A continuación le pediremos sus datos:`);
        prompt("Ingrese numero de tarjeta:");
        prompt("Ingrese numero de documento:");
        prompt("Ingrese fecha de vecimiento de tarjeta:");
        prompt("Ingrese clave de tarjeta:");
        mailUsuario = prompt("Ingrese su casilla de mail:");
        conteo = tarjetaCredito();
        break;

    default:
        pagoEn = formasDePago("La opción ingresada es incorecta");
        break;
}

// FIN DEL PROGRAMA
















  







