//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //object type
let userEmail; //undefined type

const id = Symbol('123')  //symbol type
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n  //bitint type



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //object type
let myObj = {   //object type
    name: "hitesh",
    age: 22,
}

const myFunction = function(){  //object function type
    console.log("Hello world");
}
// myFunction.call();

// console.log(typeof anotherId);
// console.log(typeof bigNumber);

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//***************Memory*******************/

// Stack(primitive datatypes) & Heap(non-primitive datatypes)

let name1= "lokesh";
let name2= name1;
// console.log(name1);
// console.log(name2);
name2="ghosh";
// console.log(name1);
// console.log(name2);

let myAccount1 = {
    userId:"lokesh@gmail.com",
    pass:"lokesh123",
}

let myAccount2 = myAccount1;

console.log(myAccount1.userId);
console.log(myAccount2.userId);

myAccount2.userId="ghosh@gmail.com";

console.log(myAccount1.userId);
console.log(myAccount2.userId);
