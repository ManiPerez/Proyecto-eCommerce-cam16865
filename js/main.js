// // Desafio Clase 4: Simulador Interactivo

// Funcion SALUDAR al usuario:

function saludar (nombre) {
    nombre = prompt("Hola, por favor escribe tu nombre:");
    alert(
    `Bienvenid@ ${nombre} a DeLa.Huerta!
    La mejor calidad en frutas y verduras.
    Directo a tu hogar!`);
}
saludar();

/* ---------------------------------------------------------------------------------------*/

// Funcion LOG IN del usuario:

function userData (nombre,apellido,mail,telefono,clave) {
    alert("Registrate ingresando tus datos:");
    nombre = prompt("Nombre:");  
    apellido = prompt("Nombre:");
    mail = prompt("Mail:");
    telefono = Number(prompt("Telefono:"));
    clave = prompt("Clave:");
    console.log(
        `Datos usuario:
        Nombre: ${nombre}
        Apellido: ${apellido}
        Mail: ${mail}
        Telefono: ${telefono}
        Clave: ${clave}
        `)

}
userData();

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
            alert(`Su pago se registró con éxito. Le enviamos a ${mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);
            break;

        case 2:
            conteo *= 1.05;
            alert(`Monto total a pagar: $${conteo}. En 2 cuotas de $${conteo/2} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);      
        break;

        case 3:
            conteo *= 1.1;
            alert(`Monto total a pagar: $${conteo}. En 3 cuotas de $${conteo/3} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${mail} el comprobante de pago.`); 
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

let mail;

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
        alert(`Su pago se registró con éxito. Le enviamos a ${mail} el comprobante de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;
    case 2:
    case 3:
    case 4:
        alert(`Listo! Le enviamos a ${mail} el link de pago.`);
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
        conteo = tarjetaCredito();
        break;

    default:
        pagoEn = formasDePago("La opción ingresada es incorecta");
        break;
}

// FIN DEL PROGRAMA



/* ----------------------------------------------------------------------------------------*/


// DESAFIO CLASE 5: INCORPORAR OBJETOS

// OBJETO 1: usuarios

class usuario {
    constructor(nombre,apellido,mail,telefono,clave) {
        this.name = nombre;
        this.lastname = apellido;
        this.mail = mail;
        this.phonenunber = telefono;
        this.password = clave;
    }
    userData() {
        console.log("Usuario: " + (this.name) + " " + (this.lastname) + ". Su mail es: " + (this.mail) + ". Telefono: " + (this.phonenunber) + ". Clave de registro: " + (this.password));
    }
}
let usuario1 = new usuario("MABEL","MORALES","mabelmorales@mail.com",221405060,"claveMabel1");
usuario1.userData();

let usuario2 = new usuario("ROBERTO","CASTRO","robertocastro@mail.com",221708090,"claveRoberto2");
usuario2.userData();


// OBJETO 2: bolsones

class bolson {
    constructor(productos,cantidad,precio) {
        this.product = productos;
        this.quantity = cantidad;
        this.price = precio;
    }
    bolsonData() {
        console.log("Bolson de " + (this.product) + ". Cantidad: " + (this.quantity) + ". Precio: $" + (this.price));
    }
}
let bolson1 = new bolson("Frutas","1kg","1200");
bolson1.bolsonData();

let bolson2 = new bolson("Vegetales","1kg","1000");
bolson2.bolsonData();

let bolson3 = new bolson("Frutas y Vegetales","2kg","2000");
bolson3.bolsonData();




















  







