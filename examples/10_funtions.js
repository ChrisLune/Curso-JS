console.log('10');

/*
const suma =(valor1, valor2) => {
    const op = valor1 + valor2;
    return op;
};
const result = suma(1,2);
console.log(result);
 */



console.log('--------------------');

//cierres
const counter = () =>{
    let count = 0

    const increment = () =>{
        count = count + 1
        // count++
    };
       
    const getCount = () =>{
        return count;
    };
         
    return{
        incremento : increment,
        cuenta : getCount,
    }
}

const jugador1 = counter();
const jugador2 = counter();
jugador1.incremento();
jugador1.incremento();
console.log(jugador1.cuenta());// 2
console.log(jugador2.cuenta());// 0

console.log('--------------------');

const products = [
    { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
    { id: 'p002', name: 'Cap', price: 5, quantity: 3 },
    { id: 'p003', name: 'Pants', price: 50, quantity: 1 },
  ];

const cart = () => {
    let products = [];

    /* 
    const addProduct =(product) => {
        products.push(product);

    };
    */

    const addProduct =({name, price, quantity}) => {
        /* 
        //ejemplo con push
        products.push({
            name,
            price,
            quantity,
        });
        */
        //otro metodo mismo resultado
        //products = products.concat({name, price, quantity});
        //segundo metodo mismo resultado
        products = [...products,{
            name,
            price,
            quantity,
        }];
    };

    const getProduct =() => {
        return products;
    };

    return{
        addProduct,
        getProduct,
    };
};

const shoppingBag1 = cart();
shoppingBag1.addProduct(products[0]);

const shoppingBag2 = cart();
shoppingBag2.addProduct(products[1]);
shoppingBag2.addProduct(products[2]);

console.log(shoppingBag1.getProduct());
console.log(shoppingBag2.getProduct());

console.log('--------------------');

const operations = (num1, num2, operation) =>{
    if(operation === 'resta'){
    return num1 - num2;
    }else if (operation === 'suma'){
    return num1 + num2;
    }    
};

const suma =(valor1, valor2) => {
    const op = valor1 + valor2;
    return op;
};

const val1 = 2;
const resta = (num1, num2) => num1 - num2;

operations(1,2, 'resta');
operations(1,2, 'suma');

const operationsV2 = (num1, num2, operationFn) => {
    return operationFn (num1,num2);
};

console.log(operationsV2(2,3, resta));
operationsV2(2,3, console.log);