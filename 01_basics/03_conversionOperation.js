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


