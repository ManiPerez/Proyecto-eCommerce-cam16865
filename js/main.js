// Desafio Clase 4: Simulador Interactivo

//Pedir con prompt al usuario que ingrese el producto y la cantidad del mismo que desea sumar al carrito e ir armando lista de compra en consola:

let producto = prompt(`De la lista de productos que se muestra a continuación, introduzca el producto que desea sumar a su carrito:
brocoli  
lechuga  
kale
palta
zanahoria
tomate
morron
cebolla
manzana
limon
huevos
papa
frutilla
banana
mandarina
naranja

Cuando quiera dar por finalizado su pedido escriba la palabra FINALIZAR`);
let cantidad = prompt("¿Cuantas unidades desea agregar a su lista?");

while (producto !== "finalizar") {
    document.write(`- ${producto}: ${cantidad} unidades<br>`);
    producto = prompt("Agrega otro producto a la lista:");
    cantidad = prompt("¿Cuantas unidades del producto?");   
}


/*------------------------------------------------------------------------------------------------------------------*/


// Log in del usuario:
let usuarios = [{
    name: prompt("Introduce tu nombre"),
    lastName: prompt("Introduce tu apellido"),
    clave: prompt("Introduce tu clave"),
}
]

/*------------------------------------------------------------------------------------------------------------------*/


// Escoger pedido que el usuario desea comprar con switch:

let compraSwitch = () => {
    alert('Por favor elija el pedido que desea realizar:');
    let compraNumber = Number(prompt(`1-Bolsón de verduras $1.000
                                      2-Bolsón de frutas $1.200`));
    while (compraNumber != isNaN){
        switch (compraNumber) {
            case 1:
                alert('Bolsón de verduras $1.000');
                verduras();
                break;
            case 2:
                alert('Bolsón de frutas $1.200');
                frutas();
                break;
        }
    }
    console.log('HOla')    /* DUDA: me gustaria validar el ingreso de datos con un while... si el numero ingresado es NaN, o menos a ,.... o tiene espacios que me diga numero no valido(ahi puse un console.log(?holaa)), solo para verificar pero no me funciona.. que estoy haciendo mal?*/
}
if (compraSwitch = 1) {
    alert("El monto a abonar es de $1.000.");
} else if (compraSwitch = 2) {
    alert("El monto a abonar es de $1.200.");
}

/*------------------------------------------------------------------------------------------------------------------*/


//Funcion switch
let compraSwitch = () => {
alert('Por favor a continuacion ingrese el método con el que desea realizar el pago:')
let transaccionNumber = Number(prompt(`1-Efectivo
                                       2-Tarjeta de Débito
                                       3-Tarjeta de Crédito
                                       4-MercadoPago
                                       5-Transferencia`))
while (transaccionNumber != isNaN){
    switch (transaccionNumber) {
        case 1:
            alert('Efectivo')
            deposito()
            break;
        case 2:
            alert('Tarjeta de Débito')
            transferencia()
            break;
        case 3:
            alert('Tarjeta de Crédito')
            transferencia()
            break;
        case 4:
            alert('MercadoPago')
            transferencia()
            break;
        case 5:
            alert('Transferencia')
            transferencia()
            break;            
    }
}
}

/*------------------------------------------------------------------------------------------------------------------*/

// Funcion Efectivo
let efectivo = () => {
    let precioCompra = Number(prompt('Por favor ingrese el monto de su compra: '));
    let efectivoAentregar = Number(prompt('Por favor ingrese el monto de efectivo con el que va a abonar: '))
    let vueltoAentregar = efectivoAentregar - precioCompra;
    alert(`Su vuelto es de $ ${vueltoAentregar}`)
    let precioCompra = []
    precioCompra.push(efectivoAentregar)
    console.log(precioCompra)
    return efectivo;
}

/*------------------------------------------------------------------------------------------------------------------*/

//Funcion transferencia
let transferencia = () => {
let numeroAtransferir = Number(prompt('Por favor ingrese la cantidad que va a transferir: '))
alert(`Su monto es de $ ${numeroAtransferir}`)
return transferencia;
}

/*------------------------------------------------------------------------------------------------------------------*/

//Inicio de usuario

alert('Bienvenid@ a deLa.Huerta')
let ingresoClave = Number(prompt('Por favor ingresa tu clave numerica: '))
if (ingresoClave === usuarios[0].clave) {
alert(`Bienvenid@ ${usuarios[0].name} ${usuarios[0].lastName} `)
compraSwitch()
} else if (ingresoClave === usuarios[1].clave) {
alert(`Bienvenida ${usuarios[1].name} ${usuarios[1].lastName} `)
compraSwitch()
} else if (ingresoClave === usuarios[2].clave) {
alert(`Bienvenida ${usuarios[2].name} ${usuarios[2].lastName} `)
compraSwitch()
}



/*------------------------------------------------------------------------------------------------------------------*/


// Funcion para llevar el stock:
// DUDA: no logro ver el error que me tira el navegador en consola. Quiero que el usuario vaya escribiendo los nombres de los productos y cuanta cantidad de c/u desea agregar a su lista de compra y que se vaya sumando el monto a pagar por la cantidad adquirida y al final se muestre el total a pagar con un alert.


let totalCompra = 0;
let producto;

do {
    producto = parseInt(prompt(`Escriba el nombre del producto que desea agregar a su pedido:
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

    Escriba la palabra FINALIZAR cuando termine de armar su pedido.`));

    let cantidad;
    
    switch (producto) {
        case 'BROCOLI':
            cantidad = parseInt(prompt('El BROCOLI está $80 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 80;
            break;
        case 'LECHUGA':
            cantidad = parseInt(prompt('La LECHUGA está $20 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 20;
            break;
        case 'KALE':
            cantidad = parseInt(prompt('El KALE está $40 el atado. ¿Cuántos desea comprar? Ecribir numero de atados:'))
            totalCompra = cantidad * 40;
            break;
        case 'PALTA':
            cantidad = parseInt(prompt('La PALTA está $90 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 90;
            break;
        case 'ZANAHORIA':
            cantidad = parseInt(prompt('La ZANAHORIA está $5 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 5;
            break;
        case 'TOMATE':
            cantidad = parseInt(prompt('El TOMATE está $20 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 20;
            break;
        case 'MORRON':
            cantidad = parseInt(prompt('El MORRON está $55 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 55;
            break;
        case 'CEBOLLA':
            cantidad = parseInt(prompt('La CEBOLLA está $4 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 4;
            break;
        case 'MANZANA':
            cantidad = parseInt(prompt('La MANZANA está $25 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 25;
            break;
        case 'LIMON':
            cantidad = parseInt(prompt('El LIMON está $10 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 10;
            break;
        case 'HUEVOS':
            cantidad = parseInt(prompt('Los HUEVOS están $120 la docena. ¿Cuántas desea comprar? Ecribir numero de docenas:'))
            totalCompra = cantidad * 120;
            break;
        case 'PAPA':
            cantidad = parseInt(prompt('La PAPA está $25 el kilo. ¿Cuántos desea comprar? Ecribir numero de kilos:'))
            totalCompra = cantidad * 25;
            break;
        case 'FRUTILLA':
            cantidad = parseInt(prompt('La FRUTILLA está $200 la bolsa de 250gr. ¿Cuántas desea comprar? Ecribir numero de bolsas:'))
            totalCompra = cantidad * 200;
            break;
        case 'BANANA':
            cantidad = parseInt(prompt('La BANANA está $7 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 7;
            break;
        case 'MANDARINA':
            cantidad = parseInt(prompt('La BANANA está $4 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 4;
            break;
        case 'NARANJA':
            cantidad = parseInt(prompt('La NARANJA está $3 la unidad. ¿Cuántas desea comprar? Ecribir numero de unidades:'))
            totalCompra = cantidad * 3;
            break;
    }

} while(producto != "FINALIZAR");

alert(`Gracias por su compra El total a abonar por su pedido es de $${totalCompra}.`);






  







