// // Desafio Clase 4: Simulador Interactivo



/* ---------------------------------------------------------------------------------------*/
// Registro del usuario:

// let nombreCliente;
// let apellidoCliente;
// let mailCliente;
// let telCliente;
// let claveCliente;

// function registro() {
//     alert("Registrate ingresando tus datos:");
//     nombreCliente = prompt("Ingresa tu nombre:");
//     apellidoCliente = prompt("Ingresa tu apellido:");
//     mailCliente = prompt("Ingresa tu mail:");
//     telCliente = prompt("Ingresa tu numero de telefono:");
//     claveCliente = prompt("Ingresa tu clave:");
//     return;
// }
// registro();
// let nombre = nombreCliente.toUpperCase();
// let apellido = apellidoCliente.toUpperCase();
// let mail = mailCliente.toLowerCase();
// let tel = Number(telCliente);
// let clave = claveCliente;


 // OBJETO 1: Cliente

class Cliente {
    constructor(nombre,apellido,mail,tel,clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.tel = tel;
        this.clave = clave;
    }
    clienteInfo() {
        console.log(`Cliente: ${this.nombre} ${this.apellido}. Mail: ${this.mail}. Telefono: ${this.tel}. Clave de registro: ${this.clave}`);
    }
}
let cliente1 = new Cliente("MABEL","MORALES","mabelmorales@mail.com",221405060,"claveMabel1");
cliente1.clienteInfo();

let cliente2 = new Cliente("ROBERTO","CASTRO","robertocastro@mail.com",221708090,"claveRoberto2");
cliente2.clienteInfo();

let cliente3 = new Cliente("COSME","FULANITO","cosmefulanito@mail.com",0303456,"claveCosme3");
cliente3.clienteInfo();


// Funcion SALUDAR al usuario:

function saludar () {
    alert(
    `Bienvenid@ ${cliente3.nombre} ${cliente3.apellido} a DeLa.Huerta!
    La mejor calidad en frutas y verduras.
    Directo a tu hogar!`);
}
saludar();

/* ---------------------------------------------------------------------------------------*/

// OBJETO 2: Bolson

class Bolson {
    constructor(producto,cantidad,precio) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    bolsonInfo() {
        console.log(`Bolson de ${this.product}. Cantidad: ${this.quantity}. Precio: $${this.price}`);
    }
}
let bolson1 = new Bolson("Frutas","1kg","1200");
bolson1.bolsonInfo();

let bolson2 = new Bolson("Vegetales","1kg","1000");
bolson2.bolsonInfo();

let bolson3 = new Bolson("Frutas y Vegetales","2kg","2000");
bolson3.bolsonInfo();

// FUNCIÓN resumen del pedido:

function sumaCosto(product,costo,costoTotal) {
    alert(
        `Mi pedido:
        
        + ${product} $${costo} 
        
        Total acumulado: $${costoTotal}`);
        return costoTotal;
}

// FUNCIÓN sumaCosto del pedido: actualiza el monto total a pagar //

function armarLista(texto = "Ingresa el producto que quieras agregar a tu lista") {
    let = listaProductos = Number(prompt(
        `${texto}:
        
        1 - Bolsón de ${bolson1.producto} ${bolson1.cantidad} $${bolson1.precio}
        2 - Bolsón de ${bolson2.producto} ${bolson2.cantidad} $${bolson2.precio}
        3 - Bolsón de ${bolson3.producto} ${bolson3.cantidad} $${bolson3.precio}
        
        0 - Finalizar lista
        
        `));
        return listaProductos;
}
let costoProductos = armarLista();

// Sentencia WHILE + SWITCH para agregar productos a la lista y finalizar el proceso mostrando con un alert el Costo Total del pedido:
let product;
let costo;
let costoTotal = 0;
let conteo = 0;

while(costoProductos != 0) {

    switch(costoProductos) {
        case 1:
            product = `Bolsón de ${bolson1.producto} ${bolson1.cantidad}`;
            costo = Number(bolson1.precio);
            costoTotal += costo;
            conteo = sumaCosto(product,costo,costoTotal);
            costoProductos = armarLista();
            break; 

        case 2:
            product = `Bolsón de ${bolson2.producto} ${bolson2.cantidad}`;
            costo = Number(bolson2.precio);
            costoTotal += costo;
            conteo = sumaCosto(product,costo,costoTotal);
            costoProductos = armarLista();
            break; 

        case 3:
            product = `Bolsón de ${bolson3.producto} ${bolson3.cantidad}`;
            costo = Number(bolson3.precio);
            costoTotal += costo;
            conteo = sumaCosto(product,costo,costoTotal);
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
    
    // Sentencia SWITCH para calcular monto de las cuotas elegidas:
       
    switch (misCuotas) {
        case 0:
            alert(`
                Lamentamos que no haya concretado su compra.
                Que tenga un buen día!`);
                break;
        case 1:
            conteo *= 1;
            alert(`Monto total a pagar en 1 cuota: $${conteo}`);
            alert(`Su pago se registró con éxito. Le enviamos a ${cliente3.mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);
            break;

        case 2:
            conteo *= 1.05;
            alert(`Monto total a pagar: $${conteo}. En 2 cuotas de $${conteo/2} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${cliente3.mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);      
        break;

        case 3:
            conteo *= 1.1;
            alert(`Monto total a pagar: $${conteo}. En 3 cuotas de $${conteo/3} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${cliente3.mail} el comprobante de pago.`); 
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

/* ----------------------------------------------------------------------------------------*/

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

// Sentencia SWITCH para calcular monto a pagar segun el medio de pago elegido por el usuario:

// let mail;

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
        alert(`Su pago se registró con éxito. Le enviamos a ${cliente3.mail} el comprobante de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;
    case 2:
    case 3:
    case 4:
        alert(`Listo! Le enviamos a ${cliente3.mail} el link de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;

    case 5:
        alert(`El monto total a pagar es: $${cliente3.mail}. A continuación le pediremos sus datos:`);
        prompt("Ingrese numero de tarjeta:");
        prompt("Ingrese numero de documento:");
        prompt("Ingrese fecha de vecimiento de tarjeta:");
        prompt("Ingrese clave de tarjeta:");
        conteo = tarjetaCredito();
        break;

    default:
        pagoEn = formasDePago("La opción ingresada es incorecta");
        break;
}


























  







