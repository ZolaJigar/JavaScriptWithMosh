//   //its my first program of js
//   console.log(' Hello world' ); 
//   let name = 'jigar';
//   console.log(name);

//   const intrestRate = 0.3 ;
//   intrestRate = 3 ;
//   console.log(intrestRate);


//primitives varibles data types - number , string , null , boolean , undefined 

// let age = 20 ; //Number (Integer type)
// let name = 'jigar' ; //String you can use single court or double court as you want
// let isApproved = false ; //Boolean type(True or false condition)
// let firstName = undefined ;  //Undefined value we will defined it later
// let lastName = null ; //Null type this varible will not contant anything now or in future


// let name = 'jigar';
// let age = 20 ;
// let person = {
//     name : 'jigar' , 
//     age : 20
// } ;

// console.log(person);


// //if you want to change the value of person object's property
// //There are 2 ways 

// // 1. Dot notation 
// person.name = 'Pratham';

// //Also use for reading value of property)
// console.log(person.name);


// // 2. Bracket notation  

// person['name'] = 'Aayush';
// console.log(person.name);

// //Another way of Bracket notation
 
// let selection = 'name';
// person[selection] = 'Meet';
// console.log(person.name);



//Arrays
// let selectedColors = ['red' , 'blue'] ;
// console.log(selectedColors);  //It will show all the values of array

// // We can access the elememt of array using the index staring from 0 index
// console.log(selectedColors[0]); 

// //Adding element inside the array at Run time

// selectedColors[2] = 'green';
// console.log(selectedColors[2]);

// //Unlike other programming languages you can add all types of elements inside one arrray like number  , string 

// selectedColors[3] = 12 ;
// console.log(selectedColors[3]);


// //Lenght property of array to know lenght of array Starting from 0

// console.log(selectedColors.length);


//Functions in JS

// function greet() {
//     console.log('Hello world');
// }
// greet();

// //How to pass value inside the function as arguments

// function greet(name) {   //Here name is parameter
//     console.log('Hello ' + name);
// }
// greet('john'); //Its argument that indicate that parameter which is inside the function as arguments

// //Types of functions

// //Calculating a value

// function square(number){
//     return number * number ;
// }
// // let result = square(5);
// console.log(square(2));



//Strings primitives inside the JavaScript
const message = '      hi i am jigar maheshwari     ';
console.log(message.length);
console.log(message[0]);
console.log(message.includes('i'));
console.log(message.includes('lol'));
console.log(message.startsWith('hi'));
console.log(message.startsWith('I'));
console.log(message.endsWith('maheshwari'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.indexOf('maheshwari'));
console.log(message.replace('maheshwari' , 'zola'));
console.log(message.trim( ));
console.log(message.trimRight( ));
console.log(message.trimLeft( ));




//String object

const another = new String('hi');
