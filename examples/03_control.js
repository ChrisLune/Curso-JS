console.log('03');
const firstProductName = 'T-Shirt';
const firstProductPrice = 35;
const firtsProductQuntity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

/*
let message = '';
//if | else if | else
if (firstProductPrice > secondProductPrice){
    message = ('El primer producto es mas caro que el segundo');
}else if(firstProductPrice === secondProductPrice){
    message =(`Los productos${firstProductName} y ${secondProductName} tienen el mismo precio`);
    //console.groupCollapsed('Tienen el mismo precio');
}else{
    message =('El primer producto es mas barato que el segundo');
}
//console.log(message);*/



/*
let message2 = '';
if(firstProductName === secondProductName){
    message2 = 'Son el mismo producto'
}else{
    message2 = 'Son diferente producto'
}
*/

let message2 = '';
const sameNames = firstProductName === secondProductName;
const samePrices = firstProductPrice === secondProductPrice;
if(sameNames && samePrices){
    message2 = 'Son el mismo producto'
}else{
    message2 = 'Son diferente producto'
}

//operador ternario
message2 = (sameNames && samePrices) ? 'Son el mismo producto' : 'Son diferente producto';

console.log(message2)


//const day= prompt('Dime un día');
//switch case
/*switch (day){
    case 'Monday':
        console.log('Hay clase es LunesMonday')
        break;
    case 'Tuesday':
        console.log('Hay clase es Martes')
        break;
    default:
        console.log('No hay clase');
        break;
}

if(day === 'Monday'){
    console.log('Hay clase es lunes');
}else if (day === 'Tuesday'){
    console.log('Hay clase es Martes');
}else{
    console.log('No hay clase');
}
*/

/*Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).

Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log */

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

// const total = totalFirstProduct + totalSecondProduct;
let message3 = '';
let total = (productAPrice * productAQuantity) + (productBPrice * productBQuantity) + (productCPrice * productCQuantity);
if (total < 50) {
    message3 = 'Puedes agregar más productos';
  } else if (total <= 100) {
    message3 = 'Estás cerca de tu límite de compra';
  } else {
    message3 = 'Has alcanzado el límite de tu compra';
  }
  console.log(message3);

/* EJERCICIO 2

Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:

Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).
  
const selectedProduct = prompt('Ingresa el nombre del producto');
  const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log. */

const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

let message4 = ''
if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
    message4 = '¡Recibes un 10% de descuento en la segunda camiseta!'
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
    message4 = '¡Obtén una gorra gratis por la compra de 3!'
} else {
    message4 = 'No hay promociones para esta selección'
}

console.log(message4);