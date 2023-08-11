let ar = [1, 2, 3, 5, 8, 9];
// console.log(ar);
// console.log(ar.toString());
// console.log(ar.length);

let ar2 = new Array(2, 3, 6, 8, 11);
// console.log(ar2);
// console.log(ar2[2]);

// Array methods
ar.push(2);
// console.log(ar);
ar.pop();
// console.log(ar);


ar.unshift(0);
// console.log(ar);
ar.shift();
// console.log(ar);


// console.log(ar.includes(1));
// console.log(ar.indexOf(3));


// let newar = ar.join();
// console.log(ar)
// console.log(newar);
// console.log(typeof newar);


//slice, splice

console.log("A ", ar);
let nAr1= ar.slice(1,4);
console.log(nAr1);
console.log("B ",ar)

let nAr2= ar.splice(1,4);
console.log(nAr2);
console.log("C ", ar);







