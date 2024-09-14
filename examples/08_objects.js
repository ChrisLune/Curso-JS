console.log('08');
const firstProductName = 'T-Shirt';
const firstProductPrice = 40;
const firtsProductQuntity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

console.log('--------------------');
const firtsProduct = {}; //object
//properties propidades 
firtsProduct.name = 'T-shirt';
firtsProduct.price = 40;
firtsProduct.quantity = 2;
firtsProduct.avalible = false;
firtsProduct.sizes = ['L', 'M'];

console.log(firtsProduct);
console.log(typeof firtsProduct);

console.log('--------------------');
const secondProduct = {
    name : 'Cap',
    price : secondProductPrice,
    quantity : secondProductQuantity,
    avalible: true,
    sizes: ['S','M','L'],
    'contry-store': 'ES',
};


//console.log(secondProduct);
console.log(secondProduct.name);
console.log(secondProduct.sizes);
console.log(secondProduct['contry-store']);
const key = 'quantity';
console.log(secondProduct[key]);

const getProducttribute = (product, key) =>{
    return product[key];
}
console.log(getProducttribute(firtsProduct, 'price'));
console.log(getProducttribute(firtsProduct, 'contry-store')); // indefined
console.log(getProducttribute(secondProduct, 'price')); // 35

secondProduct.attributes ={
    color: 'red',
    material: 'cotton'
};

console.log(secondProduct.attributes.material);

console.log('--------------------');

const product = [
    firtsProduct,
    {
        name:'shoes',
        price:12,
    }
];
console.log(product[1].name);

console.log('--------------------');

const shows = [
    {
        id:1,
        name: 'Under the dome',
        genres:['Drama', 'Science-Fictios', 'Triller']
    },// 0
    {
        id:2,
        name: 'Game of Thrones',
        genres:['Drama', 'Triller'],
        season:{
            title: 'season 1'
        },
    }//1
];

delete secondProduct.attributes;
console.log(secondProduct);

const firstShow = shows[0];
const nameFirstShow = firstShow.name;
console.log(nameFirstShow);

console.log('--------------------');
let info='';
for (let show of shows){
    if(show.name !== 'Under the dome'){
    info = info + `
    <h2>Show:${show.name}</h2>
    <p>Genres${show.genres.join(' | ')}</p>
    `;
    }
}
//mostrar en pantalla
document.write(info);
console.log(info);

console.log('--------------------');
console.log(Object.values(firtsProduct));// listado de datos
console.log(Object.entries(firtsProduct));// nombre de propiedad - valor


console.log('--------------------');
//Problema con Objcts
const user = {
    email: 'test@test.com',
    adress:{
        street:'test',
        number: '12',
    },
};
//structuredClone
//...
//JSON.parse(JSON.stringify)

const user2 = structuredClone(user);// crea un copia y no modifica la variable, es mejor esta opcion ya que mantiene mejor la clonacion de objetos
//const user2 = {...user}// no sobre escribe la primer variable
//const user2 = JSON.parse(JSON.stringify(user));
user2.email = 'test2@test.com';
user2.role = 'admin';
user2.adress.street = 'Calle Acueducto';
user2.adress.number = '14';

console.log(user);
console.log(user2);

