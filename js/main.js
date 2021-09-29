// Desafio Clase 4: Simulador Interactivo
// Listado de nombres con orden numerico mostrado en consola:

let producto = (prompt("Ingresa la cantidad de tareas que querés realizar"));;

function pedido (producto) {
    
}

switch (producto) {
    case 'Brocoli':
        console.log('La unidad de brócoli cuesta $80.');
        break;
    case 'Lechuga':
        console.log('El kilogramo de lechuga cuesta $72.');
        break;
    case 'Kale':
        console.log('El atado de kale cuesta $72.');
        break;
    case 'Palta':
        console.log('La unidad de palta cuesta $90.');
        break;  
    case 'Zanahoria':
        console.log('El kilogramo de zanahoria cuesta $22');
        break;  
    case 'Tomate':
        console.log('El kilogramo de tomate cuesta $125');
        break; 
    case 'Morron':
        console.log('El kilogramo de morrón cuesta $120');
        break; 
    case 'Cebolla':
        console.log('El kilogramo de cebolla cuesta $22');
        break;
    case 'Manzana':
        console.log('El kilogramo de manzana cuesta $195.');
        break;
    case 'Limon':
        console.log('El kilogramo de limón cuesta $45.');
        break;
    case 'Huevos':
        console.log('La docena de huevos cuesta $120.');
        break;
    case 'Papa':
        console.log('El kilogramo de papa cuesta $55.');
        break;
    case 'Frutilla':
        console.log('El kilogramo de frutilla cuesta $400.');
        break;
    case 'Banana':
        console.log('El kilogramo de banana cuesta $155.');
        break;
    case 'Mandarina':
        console.log('El kilogramo de mandarina cuesta $44.');
        break;
    case 'Naranja':
      console.log('El kilogramo de naranja cuesta $42.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + producto + '.');
  }
  
  console.log("Le avisaremos cuando su pedido esté en camino. Gracias por su compra.");