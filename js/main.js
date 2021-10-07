// // Desafio Clase 4: Simulador Interactivo

// Funcion SALUDAR:

function saludar (nombre) {
    nombre = prompt("Hola! Por favor ingresa tu nombre:").toUpperCase();
    alert(`Bienvenid@ ${nombre} a DeLa.Huerta!
    La mejor calidad en frutas y verduras.
    Directo a tu hogar!`);
    return nombre;
}
let nombreUsuario = saludar();

 // OBJETO 1: Cliente

class Cliente {
    constructor(nombre,apellido,mail,domicilio,tel,clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.domicilio = domicilio;
        this.tel = tel;
        this.clave = clave;
    }
    clienteInfo() {
        console.log(`Cliente: ${this.nombre} ${this.apellido}. Mail: ${this.mail}. Domicilio: ${this.domicilio}. Telefono: ${this.tel}. Clave de registro: ${this.clave}`);
    }
}

let cliente1 = new Cliente("COSME","FULANITO","cosmefulanito@mail.com","CALLE 1 N 101","0303456","claveCosme1");
cliente1.clienteInfo();


// Funcion validarRegistro para iniciar sesion o crear una nueva cuenta

let cliente = {};

function validarRegistro (registro) {
    alert(`Bienvenid@ ${nombreUsuario} a DeLa.Huerta!
    La mejor calidad en frutas y verduras.
    Directo a tu hogar!`);
    registro = Number(prompt(
        `Ya tenes una cuenta? Deseas crearte una? Ingresa una de las opciones:

        1 - Crear cuenta
        2 - Iniciar sesión

        0 - Ninguna de las anteriores

        `));
        return registro;
}
let registro = validarRegistro();


switch (registro) {
    case 1:
        crearCliente();
        alert("Su cuenta en deLa.Hueta ha sido creada!")          
        break;
    case 2:
        alert("A continuación ingresa los siguientes datos para iniciar sesion:");
        nombre = prompt("Ingresa tu nombre:").toUpperCase();
        mail = prompt("Ingresa tu mail:").toLowerCase();
        clave = prompt("Ingresa tu clave:");
        incioSesion();
        break;     
    default:
        alert("La opcion que ingresaste no es valida.");
        break;
}

// Funcion crear un nuevo Cliente

function crearCliente () {
    alert("A continuación te pediremos tus datos de registro:");
    const nombre = prompt("Ingresa tu nombre:").toUpperCase();
    const apellido = prompt("Ingresa tu apellido:").toUpperCase();
    const domicilio = prompt("Ingresa el domicilio donde deseas recibir tu pedido:").toUpperCase();
    const telefono = Number(prompt("Ingresa tu número de telefono:"));
    const mail = prompt("Ingresa tu mail:").toLowerCase();
    const clave = prompt("Ingresa tu clave:");
    cliente[`cliente${nombreUsuario}`] = new Cliente(nombre,apellido,domicilio,telefono,mail,clave);
    return cliente;              
}

// Funcion validar datos de inicio de sesion del Cliente:

function incioSesion () {
    if ((nombre == cliente1.nombre) && (mail == cliente1.mail) && (clave == cliente1.clave)) {
        alert(`Bienvenido ${cliente1.nombre}!`);;  
    }else{
        alert("Datos incorrectos.");
    } 
}

/* ---------------------------------------------------------------------------------------*/

// OBJETO 2: Bolson

class Bolson {
    constructor(producto,cantidad,precio) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    bolsonInfo() {
        console.log(`Bolson de ${this.producto}. Cantidad: ${this.cantidad}. Precio: $${this.precio}`);
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
    let = listavegetales = Number(prompt(
        `${texto}:
        
        1 - Bolsón de ${bolson1.producto} ${bolson1.cantidad} $${bolson1.precio}
        2 - Bolsón de ${bolson2.producto} ${bolson2.cantidad} $${bolson2.precio}
        3 - Bolsón de ${bolson3.producto} ${bolson3.cantidad} $${bolson3.precio}
        
        0 - Finalizar lista
        
        `));
        return listavegetales;
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
            
            1 - En 1 cuota: $${conteo.toFixed(0)}. Total: $${conteo.toFixed(0)}
            2 - En 2 cuotas de $${((conteo * 1.05)/2).toFixed(0)} c/u. Total: $${(conteo * 1.05).toFixed(0)}
            3 - En 3 cuotas de $${((conteo * 1.1)/3).toFixed(0)} c/u. Total: $${(conteo * 1.1).toFixed(0)}
            
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
            alert(`Monto total a pagar en 1 cuota: $${conteo.toFixed(0)}`);
            alert(`Su pago se registró con éxito. Le enviamos a ${this.mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);
            break;

        case 2:
            conteo *= 1.05;
            alert(`Monto total a pagar: $${conteo.toFixed(0)}. En 2 cuotas de $${(conteo/2).toFixed(0)} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${this.mail} el comprobante de pago.`);
            alert(`
            Gracias por su compra!
            Nos comunicaremos cuando su pedido esté en camino.
            Que tenga un buen día!`);      
        break;

        case 3:
            conteo *= 1.1;
            alert(`Monto total a pagar: $${conteo.toFixed(0)}. En 3 cuotas de $${(conteo/3).toFixed(0)} c/u.`);
            alert(`Su pago se registró con éxito. Le enviamos a ${this.mail} el comprobante de pago.`); 
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

// FUNCION pedir datos tarjeta:

function datosTarjeta (num,doc,venc,clave) {
    alert(`El monto total a pagar es: $${conteo.toFixed(0)}. A continuación le pediremos sus datos:`);
    num = prompt("Ingrese numero de tarjeta:");
    doc = prompt("Ingrese numero de documento:");
    venc =prompt("Ingrese fecha de vecimiento de tarjeta:");
    clave = prompt("Ingrese clave de tarjeta:");
}

// Sentencia SWITCH para calcular monto a pagar segun el medio de pago elegido por el usuario:

// let mail;

switch (pagoEn) {
    
    case 0:
        alert(`
            Lamentamos que no haya concretado su compra.
            Que tenga un buen día!`);
            break;
    case 1:  
        datosTarjeta();
        alert(`Su pago se registró con éxito. Le enviamos a ${this.mail} el comprobante de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;
    case 2:
    case 3:
    case 4:
        alert(`Listo! Le enviamos a ${this.mail} el link de pago.`);
        alert(`
        Gracias por su compra!
        Nos comunicaremos cuando su pedido esté en camino.
        Que tenga un buen día!`);
        break;

    case 5:
        datosTarjeta();
        conteo = tarjetaCredito();
        break;

    default:
        pagoEn = formasDePago("La opción ingresada es incorecta");
        break;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 6: Incorporar al menos un Array en tu proyecto y Utilizar algunos de los métodos o propiedades vistos en clase


// ARRAY 1: VEGETALES

const vegetales = [{ id: 1,  producto: "KALE", precio: 72, cantidad: "1kg"},
                  {  id: 2,  producto: "PALTA", precio: 90, cantidad: "1kg"},
                  {  id: 3,  producto: "BROCOLI", precio: 80, cantidad: "1kg"},
                  {  id: 4,  producto: "LECHUGA", precio: 72, cantidad: "1kg"},
                  {  id: 5,  producto: "MORRON", precio: 120, cantidad: "1kg"},
                  {  id: 6,  producto: "CEBOLLA"  , precio: 22, cantidad: "1kg"},
                  {  id: 7,  producto: "ZANAHORIA"  , precio: 22, cantidad: "1kg"},
                  {  id: 8,  producto: "TOMATE"  , precio: 125, cantidad: "1kg"},
                  {  id: 9,  producto: "PAPA" , precio: 55, cantidad: "1kg"}];

// Funcion metodo FIND para encontrar un objeto 

const buscarTomate = vegetales.find(producto => producto.id === 8); 
console.log(buscarTomate);

// Funcion metodo FILTER para crear nuevo array con los objetos que tienen un precio menor a $50 

const vegBaratos = vegetales.filter(producto => producto.precio < 50); 
console.log(vegBaratos);

// Funcion metodo MAP para crear nuevo array con los aumentos en un 5% de los precios de los objetos

const vegAumentos = vegetales.map(producto => producto.precio += 30);
console.log(vegAumentos);

// Funcion SORT ordenar arreglo de menor a mayor segun el precio de sus objetos

vegetales.sort( (a,b) =>{
    if ( a.precio < b.precio) {
        return -1
    }

    if ( a.precio > b.precio){
        return 1
    }

    return 0
})
console.log(vegetales);

// Constructor para agregar nuevos objetos al array vegetales con el metodo PUSH 

class Vegetal {
    constructor(nombre,precio,cantidad) {
        this.nombre  = nombre.toUpperCase();
        this.cantidad  = cantidad.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = true;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

vegetales.push(new Vegetal("APIO","1KG","75"));
vegetales.push(new Vegetal("ZAPALLITO","1KG","140"));
vegetales.push(new Vegetal("CALABAZA","1KG","90"));



// ARRAY 2: FRUTAS

const frutas = [{ id: 1,  producto: "MANZANA", precio: 195, cantidad: "1kg"},
                  {  id: 2,  producto: "LIMON", precio: 45, cantidad: "1kg"},
                  {  id: 3,  producto: "MANDARINA", precio: 44, cantidad: "1kg"},
                  {  id: 4,  producto: "NARANJA", precio: 42, cantidad: "1kg"},
                  {  id: 5,  producto: "FRUTILLA", precio: 400, cantidad: "1kg"},
                  {  id: 6,  producto: "BANANA" , precio: 155, cantidad: "1kg"}];


// Funcion metodo FIND para encontrar un objeto 

const buscarBanana = frutas.find(producto => producto.id === 6); 
console.log(buscarBanana);

// Funcion metodo FILTER para crear nuevo array con los objetos que tienen un precio menor a $50 

const frutBarata = frutas.filter(producto => producto.precio < 50); 
console.log(frutBarata);

// Funcion metodo MAP para crear nuevo array con los aumentos en un 5% de los precios de los objetos

const frutAumento = frutas.map(producto => producto.precio *= 1.05);
console.log(frutAumento);

// Funcion metodo SORT ordenar arreglo de menor a mayor segun el precio de sus objetos

frutas.sort( (a,b) =>{
    if ( a.precio < b.precio) {
        return -1
    }

    if ( a.precio > b.precio){
        return 1
    }

    return 0
})
console.log(frutas);

// Constructor para agregar nuevos objetos al array frutas con el metodo PUSH

class Fruta {
    constructor(nombre,precio,cantidad) {
        this.nombre  = nombre.toUpperCase();
        this.cantidad  = cantidad.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = true;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

frutas.push(new Fruta("CIRUELA","1KG","60"));
frutas.push(new Fruta("KIWI","1KG","175"));
frutas.push(new Fruta("DURAZNO","1KG","56"));

























  







