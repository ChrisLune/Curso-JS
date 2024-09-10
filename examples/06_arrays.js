console.log('06');
//                    0     1     2  lenght es la longitud de la lista
const myProducts = ['TV', 'PC', 'Cap']; // new Array (10)
console.log(myProducts);

// ver como acceder a los elementos de la lista

myProducts.push('Shoe');
console.log(myProducts);
//myProducts.unshift();
//ver como acceder  los elementos de la lista 
console.log(myProducts[0]);// TV
console.log(myProducts[1]);// PC

const thirdProduct = myProducts[2];
console.log(thirdProduct.trim() === 'Cap');// true

// ver como modificr la lista. Añadir eliminar modificar concatenar
myProducts.pop();
console.log(myProducts);
myProducts[1]='PC - out of Stock';
console.log('-----------');
console.log(myProducts);
//ver como hacer copias de las listas 
const user2Products =[...myProducts] ;
//const user2Products=[].concat(myProducts); // es equivalente a lo anterior 


user2Products.push('Pants');
console.log(user2Products);
console.log(myProducts);

const addProduct =(list, newProduct) =>{
    const newList = [...list];
    newList.push(newProduct);
    return newList;
}
const copyProducts = addProduct(myProducts, 'Laptop');
console.log(copyProducts);
console.log(myProducts);
//hacer validadiones con las listas si tenemos algun elemento
console.log(myProducts.indexOf('Laptop'));//-1
console.log(copyProducts.indexOf('Laptop')); //3
console.log(copyProducts.includes('Laptop')); //true
console.log(copyProducts.reverse()); //poner listado alrevez

// convertir lista a otro tipo (string)
console.log('-----------');
const csvProducts ='T-shirt;pants;shoes;cap';
const products = csvProducts.split(';'); //[T-shirt,pants,shoes,cap]
console.log('csv: ',products);
const shoesIndex = products.indexOf('shoes');//2
products.splice(shoesIndex, 1);
console.log('product after delete',products);
const newCsvProduct = products.join(';');
console.log(newCsvProduct);


console.log('-----------');

const input1=[
'test',
'Keepcoding',
'testeo',
'html',
];

const getFileName = (list) => {
  const lastElement = list.length - 1;
  const extension = list[lastElement];
  const newList =[...list];
  newList.pop();
  return `${list.join('/')}.${extension}`;
};

console.log(getFileName(input1));
console.log(getFileName(input1));
console.log(getFileName(input1));
console.log(input1);

