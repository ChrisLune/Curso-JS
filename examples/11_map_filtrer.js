console.log('11');

const numbers = [33,27,108,44,111];

let newList = [];

for (let number of numbers){ // for (let index =0; index < numbers.length; i++)
    newList.push(number * 2);
}
console.log(newList);

console.log('--------------------');

//      0  1  2   3  4
//map [33,27,108,44,111]
/*
const newListWithMap = numbers.map(function(number, index){
    console.log(number, 'index', index);
    return number * 2;
});
 */

const doubleFn = number => number *2;

//simplificado
const newListWithMap = numbers.map(number => number * 2);

console.log(newListWithMap);
console.log('--------------------');

const filterList = numbers.filter(function(number){
    console.log('Dentro del filter', number);
    return number <50;
});

console.log(filterList);

console.log('--------------------');

const filterListV2 = numbers.filter(number => number < 50);

console.log(filterListV2);


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

/* 
let books2000 = books.filter(function(books){
    return books.year > 2000;
});
console.log(books2000);
console.log('--------------------');

books2000 = books.map(function(books){
    return books.title;
});
console.log(books2000.join(' , '));
*/

//Simplificado
/*
let books2000 = books.filter(books => books.year > 2000);
console.log(books2000);

console.log('--------------------');

books2000 = books.map(books => books.title);
console.log(books2000.join(' , '));
*/
//Mas Simplificado

const books2000 = books.filter(books => books.year > 2000).map(({title}) => title).join(' , ');
console.log(`El listado es: ${books2000}`);


