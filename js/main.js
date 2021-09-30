// Desafio Clase 4: Simulador Interactivo

//Simulacro base de datos de usuarios
let usuarios = [{
    name: 'Julia',
    lastName: 'Portobello',
    clave: 848402,
},
{
    name: 'Marcos',
    lastName: 'Filarmonica',
    clave: 461946,
},
{
    name: 'Julia',
    lastName: 'Roballos',
    clave: 849102,
}
]

//FUNCIONES

//Funcion swich
let transaccionSwitch = () => {
alert('Por favor a continuacion ingrese el numero de transaccion que desea realizar')
let transaccionNumber = Number(prompt('1-Deposito || 2- Transferencia'))
while (transaccionNumber != isNaN){
    switch (transaccionNumber) {
        case 1:
            alert('Deposito')
            deposito()
            break;
        case 2:
            alert('Transferencia')
            transferencia()
            break;
    }
}
console.log('HOla')    /* DUDA: me gustaria validar el ingreso de datos con un while... si el numero ingresado es NaN, o menos a ,.... o tiene espacios que me diga numero no valido(ahi puse un console.log(?holaa)), solo para verificar pero no me funciona.. que estoy haciendo mal?*/
}

//funcion deposito
let deposito = () => {
let numeroAdepositar = Number(prompt('Por favor ingrese la cantidad que desea depositar: '))
alert(`Su monto a depositar es de $ ${numeroAdepositar}`)
let movimientosDeposito = []
movimientosDeposito.push(numeroAdepositar)
console.log(movimientosDeposito)
return deposito;
}

//Funcion transferencia
let transferencia = () => {
let numeroAtransferir = Number(prompt('Por favor ingrese la cantidad que desea transferir: '))
alert(`Su monto es de $ ${numeroAtransferir}`)
return transferencia;
}

/*--------------------------------------------------------*/

//Programa bancario

alert('Bienvenido a Banco Comafi')
let ingresoClave = Number(prompt('Por favor ingrese su clave numerica: '))
if (ingresoClave === usuarios[0].clave) {
alert(`Bienvenid@ ${usuarios[0].name} ${usuarios[0].lastName} `)
transaccionSwitch()
} else if (ingresoClave === usuarios[1].clave) {
alert(`Bienvenida ${usuarios[1].name} ${usuarios[1].lastName} `)
transaccionSwitch()
} else if (ingresoClave === usuarios[2].clave) {
alert(`Bienvenida ${usuarios[2].name} ${usuarios[2].lastName} `)
transaccionSwitch()
}




// DESAFIOS COMPLEMENTARIOS:

//Listar productos en la cesta y sumar su precio:

console.log(`De la lista de productos que se muestra a continuación, introduzca el producto que desea sumar a su pedido:
BROCOLI  
LECHUGA  
KALE
PALTA
ZANAHORIA
TOMATE
MORRON
CEBOLLA
MANZANA
LIMON
HUEVOS
PAPA
FRUTILLA
BANANA
MANDARINA
NARANJA

Cuando quiera dar por finalizado su pedido escriba la palabra FINALIZAR.`);

let conteo = 0;

function pedido (producto) {
    let total;

    switch (producto) {
        case 'BROCOLI':
            conteo = conteo + 80;
            break;
        case 'LECHUGA':
            conteo = conteo + 72;
            break;
        case 'KALE':
            conteo = conteo + 40;
            break;
        case 'PALTA':
            conteo = conteo + 90;
            break;
        case 'ZANAHORIA':
            conteo = conteo + 22;
            break;
        case 'TOMATE':
            conteo = conteo + 125;
            break;
        case 'MORRON':
            conteo = conteo + 120;
            break;
        case 'CEBOLLA':
            conteo = conteo + 22;
            break;
        case 'MANZANA':
            conteo = conteo + 195;
            break;
        case 'LIMON':
            conteo = conteo + 45;
            break;
        case 'HUEVOS':
            conteo = conteo + 120;
            break;
        case 'PAPA':
            conteo = conteo + 55;
            break;
        case 'FRUTILLA':
            conteo = conteo + 400;
            break;
        case 'BANANA':
            conteo = conteo + 155;
            break;
        case 'MANDARINA':
            conteo = conteo + 44;
            break;
        case 'NARANJA':
            conteo = conteo + 42;
            break;
        case 'FINALIZAR':
            break;
    }

    return conteo; 
}

console.log(pedido()); /*DUDA: quería hacer la suma de la lista de productos con sus precio con promp pero el break no deja que el usuario siga agregando productos, solo se puede hacer con "console.log". De que otra forma podria hacerlo para que sea mas interactivo? */






// Desafio complementario: Define tres funciones cuyas llamadas secuenciales resuelvan un proceso complejo:

// Stock de mis productos:

function pagar (valor) {
    let medioDePago;

    if (valor == 1) {
        medioDePago = "efectivo";
    } else if (valor == 2) {
        medioDePago = "Debito";
    } else if (valor == 3) {
        medioDePago = "Credito";
    } else if (valor == 4) {
        medioDePago = "MercadoPago";
    } else if (valor == 5) {
        medioDePago = "PagoFacil";
    } else {
        medioDePago = "Tranferencia";
    }

    return medioDePago;
}

console.log(pagar());






// Calcular el interés compuesto de pagar en cuotas:

//pido datos al usuario:
let montoInicial= Number(prompt("Introduzca el monto inicial = "));
let interes = Number(prompt("Introduzca el interés mensual = "));
let cuotas = Number(prompt("Introduzca el nº de cuotas = "));
 
//asigno a una variable el valor que me devuelve la función y lo mostro con dos decimales:
let montoFinal = interesCompuesto(montoInicial, interes, cuotas);
document.write("Monto final calculado: " + montoFinal.toFixed(2));
 
// defino la función que va a hacer el cálculo:

function interesCompuesto(ci, i, p) {
   let cf = ci * Math.pow( 1+i / 100, p );
   return cf;
}


// Funcion para llevar el stock:

const vender = (cantidad) => {
    if (stock >= cantidad) {
        stock = stock - cantidad;
        totalVendidos += cantidad;
        console.log(`Quedan ${stock} unidades disponibles`);
    } else {
        console.log('No hay stock suficiente');
    }
}

const reponer = (cantidad) => {
    stock += cantidad;
    console.log(`El nuevo stock es de ${stock} unidades`);
}

let totalVendidos = 0;
let opcion;
let stock = 10;

do {
    opcion = parseInt(prompt('Elija una opción:\n1 - Vender\n2 - Reponer\n3 - Salir'));
    let cantidad;
    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt('¿Cuántos productos desea vender?'))
            vender(cantidad);
            break;
        case 2:
            cantidad = parseInt(prompt('¿Cuántos productos desea reponer?'))
            reponer(cantidad);
            break;
        default:
            break;
    }

} while(opcion != 3);

console.log(`Gracias por su visita, se vendieron ${totalVendidos} productos`);






  







