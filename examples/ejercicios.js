/*Crea una función para poder usar el código de la promoción de productos en el carrito de compras. 
Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la 
promoción aplicada.

Usa tu código o este: */


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