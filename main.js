// Desafio Clase 4: Simulador Interactivo
// Listado de nombres con orden numerico mostrado en consola:

let nombre = "";
let listado = "";
let contar = 0;

alert('Introduzca un nombre a la vez en el listado. Cuando quieras salir del programa escribe la palabra SALIR tanto en minuscula como mayuscula.');

nombre = prompt ('Introduzca un nombre');

while (nombre == null || nombre == "") {
    nombre = prompt('Introduzca un nombre');
}

nombre = nombre.toUpperCase();

while (nombre != "SALIR") {
    contar++;
    console.log(contar + '-' + nombre);
    nombre = prompt("Introduzca un nombre");

    while(nombre == null || nombre == "") {
        nombre = prompt("Introduzca un nombre");
    }

    nombre = nombre.toUpperCase();
}