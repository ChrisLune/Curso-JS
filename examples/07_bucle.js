console.log('07');
///                 0       1       2
const products =['Cap', 'T-shirt', 'shoes'];

const productMessage =(productTitle)=>{
    console.log(`Producto ${productTitle}`);
};


productMessage(products[0]);
productMessage(products[1]);
productMessage(products[2]);
productMessage(products[3]);
 
 
//Bucles
//while, do-while, for 
//map, filter reduce, find forEach
//                              index++
/*
for (let index = 0; index < 3; index ++){
    console.log('Detro del loop');
}
for (let index = 0; index < products.length; index++){
    const product = products[index];
    productMessage(product);
    //console.log(product);
}
*/

console.log('--------------------');
let index = 0;
while(index < products.length){
    console.log('Dentro While');
    const product = products[index];
    productMessage(product);
    index++;
}

/*
console.log('--------------------');
while(true){
    const info = prompt('Dame un producto');
    if(info === null || info.trim() === 'NO')break;
    products.push(info);
    console.log(products); 
}
 */

console.log('--------------------');
const userProdcuts =[
    ['Tv', 'Pc'], //0 - User 1
    ['Cap', 'T-shirt'], //1 - User 2
    ['Pants', 'Jeans'], //0 - User 3
];

console.log(userProdcuts[2][1]);//'Jeans'
const user3 = ['Pants', 'Jeans'];//['Pants', 'Jeans'];
console.log(user3[0]);

for (let index = 0; index < userProdcuts.length; index++){
    const productUser = userProdcuts[index];
    for (let productIndex = 0; productIndex < productUser.length; productIndex++){
        console.log(productUser[productIndex]);
    }
 }
 
 console.log('--------------------');
const tree = [
    ['-','-','*','-','-'],
    ['-','*','*','*','-'],
    ['*','*','*','*','*']  
];

console.log('--------------------');
for (let index = 0; index < tree.length; index++){
    const row = tree[index];
    const rowString = row.join('');
    console.log(rowString);
}

console.log('--------------------');
let message = '';
for (let index = 0; index < tree.length; index++){
    const row = tree[index];//  ['-','-','*','-','-']
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++){
        const column = row[columnIndex];
        message = message + column
    }
    message = message + '\n';
}

console.log('--------------------');
//for of
for (let row of tree){
    for (let column of row){
        message = message + column;
    }
    message = message + '\n';
}

console.log(message);
console.log('End Script');

