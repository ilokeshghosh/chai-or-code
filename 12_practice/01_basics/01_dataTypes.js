const x = Number.MAX_SAFE_INTEGER;
const y = 18014398509481982n;
// const z = x + y
// console.log(z)
let a = null;
console.log(typeof a); //object
let b;
// console.log(b)
b = Symbol('test');
console.log(b);
let c = Symbol('test');
console.log(c === b);
