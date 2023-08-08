/*
let score =55;
let score2= "55abc";
let score3= null;
let score4 = undefined;
let score5 = true;
let score6="Lokesh";



let IsScoreNumber = Number(score);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);

IsScoreNumber = Number(score2);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);

IsScoreNumber = Number(score3);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);

IsScoreNumber = Number(score4);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);

IsScoreNumber = Number(score5);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);


IsScoreNumber = Number(score6);
console.log(typeof(IsScoreNumber))
console.log(IsScoreNumber);


//"33" => 33
//"33abc" => NaN //NaN is number type
//true => 1; false => 0;

 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true ; 0 => false
// "" => false
// "lokesh" => true
 
let someNumber = true

let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof(stringNumber))

*/

// *********************** Operations ***********************

// console.log(typeof(NaN))
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// ++gameCounter;
// let b = gameCounter++;
// console.log(b);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion