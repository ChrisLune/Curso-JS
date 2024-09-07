console.log('05');


 function showMessage(){
    const discount = '50%';
    const message = `Oferta todo al ${discount}`; // comills invertidas``
    console.log(message);
}

function sumCapTshirtPrice(){
    const tshirtPrice = 10;
    const capPrice = 5;
    const total = capPrice + tshirtPrice;
    console.log(total);
}

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

//funcion con paraametros
//1. definicion
//2. paramtros
//3. return o devolver valor

/* 
function productTotalPrice(price, quantity){
   const total = price * quantity;
   //console.log(total);
   return total;
}
   */

//arrow funtions =>
const productTotalPrice = (price, quantity) =>{
    const total = price * quantity
    return total; 
}

// esto es equivalente a funtion y const anterior 
//const productTotalPrice = (price, quantity) => price * quantity;

//console.log(productTotalPrice(12, 2));
//const productSubTotal = productTotalPrice(12, 2);
//console.log(productSubTotal);

//const productASubtotal = productAPrice * productAQuantity;
//const productBSubtotal = productBPrice * productBQuantity;
//const productCSubtotal = productCPrice * productCQuantity;

const productASubtotal = productTotalPrice(productAPrice * productAQuantity);
const productBSubtotal = productTotalPrice(productBPrice * productBQuantity);
const productCSubtotal = productTotalPrice(productCPrice * productCQuantity);