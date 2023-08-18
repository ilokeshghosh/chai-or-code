// const userEmail="lokesh@gmail.com";
// const userEmail=""; //false
const userEmail=[]; //true

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy
// "0", 'false', " ", [], {}, function(){}


// if(!userEmail.length){
//     console.log(userEmail.length);
//     console.log("Array is empty");
// }

// if(userEmail.length === 0){
//     console.log(userEmail.length);
//     console.log("Array is empty");
// }



const emptyObj = {}

// if(Object.keys(emptyObj).length ===0){
//     console.log("empty object");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5??10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = undefined ?? 15 ?? 20;
// console.log(val1);


// terniary operator
// condition ? true : false
const iceTeaPrice =100;
iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");






