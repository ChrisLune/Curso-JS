/*Crea una función para poder usar el código de la promoción de productos en el carrito de compras. 
Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la 
promoción aplicada.

Usa tu código o este: 


const discount = (selectedProduct, selectedQuantity) =>{
    let message = '';
    // Verificando las condiciones para aplicar la promoción
    if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
    message = '¡Recibes un 10% de descuento en la segunda camiseta!';
    } else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
    message = '¡Obtén una gorra gratis por la compra de 3!';
    } else {
    message = 'No hay promociones para esta selección';
    }
    return message;
};

console.log(discount("T-shirt", 3));
*/
/*
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/

// Paso 1, crea un array vacio llamado numeros
const numeros = []

// Paso 2, Agrega los numeros del 1 al 5 por entre el numero 3 y 4 la palabra keepcoding
numeros.push(1,2,3,4,"Keepcoding",5)

// Paso 3, muestra en consola numeros
console.log(numeros)

// Paso 4 detecta si dentro del array esta la palabra keepcoding, si lo esta muestra en consola, 
//este array no solo tiene numeros
const isKeepcodingInNumeros = numeros.includes('keepcoding')

if (isKeepcodingInNumeros) console.log('Este array no solo tiene números')

// Paso 5 Agrega el numero 10 al principio del array
numeros.unshift(10)

// Paso 6, Imprime el contenido del array en la consola
console.log(numeros)

// Paso 7, utiliza indexOf para encontrar el indice de keepcoding
const keepcodingIndex = numeros.indexOf('keepcoding')

// Paso 8, elimina el elemento keepcoding usando el indice anterior
numeros.splice(keepcodingIndex, 1)

// Paso 9, imprime por consola el array
console.log(numeros)

// Paso 10, imprime la longitud del array
console.log(numeros.length)


/*console.log('06 ejercicio')


//Paso 1: Crea un array vacío llamado "numeros"
const numeros = [];

//Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
numeros.push(1,2,3,4,"Keepcoding",5)

//Paso 3: Imprime el contenido del array "numeros" en la consola
console.log(numeros); 

//Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
const keepcodingFlag = numeros.includes("Keepcoding");
if (keepcodingFlag) {
    console.log("este array no solo tiene números"); 
}

//Paso 5: Agrega el número 10 al inicio del array "numeros"
numeros.unshift(10);

//Paso 6: Imprime el contenido del array "numeros" en la consola
console.log(numeros);
//Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
const keepcodingIndex = numeros.indexOf("Keepcoding");

//Paso 8: Elimina la palabra keepcoding a partir del índice anterior
numeros.splice(keepcodingIndex,1);
//Paso 9: Imprime el contenido del array "numeros" en la consola
console.log(numeros);
//Paso 10: Imprime la longitud del array "numeros" en la consola
console.log(numeros.length); */