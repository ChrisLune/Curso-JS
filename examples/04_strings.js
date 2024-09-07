console.log('04');

let username = 'Chris     ';
let password = '    1234A';
let authenticated = false;

username = username.trim();
password = password.trim().toLocaleLowerCase();

username = username.toLowerCase();// dato en minusculas

if (username === 'Chris' && password === '1234A'){  //al declararlo en el If tiene mayusculas y es false
    authenticated = true;
}
console.log(`Is authenticated ${authenticated}`); // Is authenticated -> true

//const email = prompt('Add email');
const email = 'Test@Test.com  '
const email2 = 'Test@dera.es'

if (email === null){
    throw new Error('Null is not Valid');
}

console.log(email.toLowerCase().trim().includes('@test.com')); //true
console.log(email2.toLocaleLowerCase().trim().replaceAll('test', '***'));

if (!email.toLocaleLowerCase().trim().includes('@dera')){  // el ! es lo contrario, si no incluyye @dera
    //lanzar un error 
    //throw new Error('No es un correo de Dera');// mostrar error en pantalla 

}

const promptPrice = '23';
console.log(parseInt(promptPrice));
console.log(+promptPrice);
console.log(Number(promptPrice));
