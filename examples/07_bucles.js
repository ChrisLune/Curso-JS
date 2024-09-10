console.log('07');
///                0         1         2
const products = ['Cap', 'T-Shirt', 'Shoes'];

const productMessaga = (productTitle) => {
    console.log(`Producto ${productTitle}`);

};
/*
productMessaga(products[0]);
productMessaga(products[1]);
productMessaga(products[2]);
*/

//Bucles
//while, do-while, for 
//map, filter reduce, find forEach
//                              index++
for (let index = 0; index < 3; index + 1){
    console.log('Detro del loop');
}

for (let index = 0; index < products.length; index++){
    console.log(index);
}

console.log('End Script');