console.log('09');

//objetos no se puede crar una variable por que no existe 
const twilight = {title: 'Twilight', author: 'Stephenie Meyer', year: 2005};
const {title} = {title: 'Twilight', author: 'Stephenie Meyer', year: 2005};

console.log(twilight.title);
console.log(title);


//array se puden usar nombres de una variable 
//       0           1
const [firstBook, ,Third] = [// al poner comas es un espacio mas
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

  //console.log(firstBook);
  //console.log(secondBook);
  
  console.log('--------------------');
  const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },//0
    {
      title: 'One Hundred Years of Solitude',//1
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",//2
      author: 'J.K. Rowling',
      year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },//3
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },//4
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },//5
  ];

  console.log(books[4]);
  console.log(books[3].author);
  console.log(books[5]);

  console.log('--------------------');
  const getTheTitle = (books) =>{
    let result = [];
    for (let i = 0; i < books.length; i++){
        const{year, title}= books[i];
        if(year > 2000){
            console.log(title);
        }
    }
    return result
  };

  //console.log(getTheTitle(books));

  console.log('--------------------');
  const csvProdcts = 'T-shirt,10,Amazon,\nCap,5,Google\n,Pants,15,Amazon,\nShoes,20,Google';

  const processCSV = (csv) => {
    const products = [];
    const lines = csv.split('\n'); //['T-shirt,10,Amazon,\nCap,5,Google\n,Pants,15,Amazon,\nShoes,20,Google']
    for (let line of lines){//line 'T-shirt,10,Amazon'
        const [name, price, store] = line.split(' , ');//['T-shirt', '10', 'Amazon']
        products.push({
            name,
            price:parseInt(price),
            store:store

        });
    }
    return products;
  };

  const products = processCSV(csvProdcts);
  console.log(products);


  console.log('--------------------');

const infoGeneral = {
    bootcamp:'Keepcoding',
    name:'General',
};

let module1 ={
    name: 'JS',
};

module1 = { ...module1, ...infoGeneral};
console.log(module1);

let module2 = {
    ...infoGeneral,
    name: 'HTML'
};

console.log(module2);

  