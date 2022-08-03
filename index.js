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


let name = 'jigar';
let age = 20 ;
let person = {
    name : 'jigar' , 
    age : 20
} ;

console.log(person);


//if you want to change the value of person object's property
//There are 2 ways 

// 1. Dot notation 
person.name = 'Pratham';

//Also use for reading value of property)
console.log(person.name);


// 2. Bracket notation  

person['name'] = 'Aayush';
console.log(person.name);

