//Rvisando tema de variables
/*
Comntarios en varias 
lineas
*/

//cammelCase
//snake_case
//kbab-case

const productName = 'T-shirt';
console.log(productName);

const quantity = 1;
console.log(quantity);
const firstProductName = 'Shoes';

let newProduct = 'Cap';
console.log(newProduct );
newProduct = 'Pants';

console.log(newProduct);

var firtsProductQuntity = 13;
console.log(firtsProductQuntity);

//number
const secondProductQuantity = 12.212;

//string
let message ='Your cart is empty';
message = "Your cart us empty";
message = 'Your cart is "empy"'; //Your cart is "empty"
message = "Your cart is \"empty\""; // Your cart is "empty"
console.log(message);
//template string

message = `
Your cart

   No products
`;
console.log(message);
console.log(typeof message);

let stock = null;
console.log(stock);

//bolean
const disscount = true;
const isChrisOnline = false;

stock = Infinity;
console.log (typeof 9007199254740992n);

message = `Your product is ${productName} quantity ${quantity}`;
message = 'Your product is ' + productName + ' quantity ' + quantity;
console.log(message);
