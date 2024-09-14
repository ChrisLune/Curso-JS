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
/*
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
*/

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

//Dado este listado de valores, crea un programa que separe los números 
//pares de los impares en dos arrays diferentes.
/* 
console.log("07 bucles ejercicio");

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const evenNumbers = []; // Array para almacenar números pares
const oddNumbers = [];  // Array para almacenar números impares

for (index = 0; index < numbers.length; index ++){
    if ((numbers[index] % 2) === 0 ){
        evenNumbers.push(numbers[index])
    } else{
        oddNumbers.push(numbers[index])
    }
}

console.log(evenNumbers);
console.log(oddNumbers);
*/

//Recorrer el array de libros y mostrar en consola 
//los títulos de los libros que fueron publicados después del año 2000.
/*
const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  ];

  let message=''
  for (book of books){
    if(book.year > 2000){
        message=`${message} - ${book.title}`;
    }
  }
  console.log(message);

//otro ejemplo
/*
for (let i = 0; i < books.length; i++) {
  if (books[i].year > 2000) {
console.log(books[i].title);
  }
}
*/
/*
//Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:
*/
function calculadora() {
  let total = 0;

  return {
      sumar: function (num) {
          total += num;
          return undefined; // Retornamos undefined como se indica
      },
      restar: function (num) {
          total -= num;
          return undefined; // Retornamos undefined como se indica
      },
      multiplicar: function (num) {
          total *= num;
          return undefined; // Retornamos undefined como se indica
      },
      dividir: function (num) {
          if (num !== 0) {
              total /= num;
          } else {
              console.log("No se puede dividir entre cero");
          }
          return undefined; // Retornamos undefined como se indica
      },
      total: function () {
          return total; // Retornamos el total acumulado
      }
  };
}

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
