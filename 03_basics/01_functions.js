function sayMyName(){
    console.log("L")
    console.log("O")
    console.log("K")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName();
// console.log(sayMyName);

function addNumbers(num1, num2){
    return num1+num2;
}
// const result = addNumbers(2, "1");
// console.log(typeof result);
// console.log(result);

 
function loginUserMessage(name ="Sam"){
    if(!name) //!message is same as !(name === undefined)
    {
        console.log("You have not entered any name");
        return
    }
    return `${name} has logged in` //string interpolation
}

// const result =loginUserMessage("lokesh");
// console.log(loginUserMessage());
// console.log(loginUserMessage("Lokesh"));

const user ={
    username:"Lokesh",
    price:1000
}

// without destructuring
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// With destructuring
function handleObject({username, price}){
    console.log(`Username is ${username} and price is ${price}`);
}

// handleObject(user);

// handleObject({
//     username:"Ram",
//     price:2999
// })

const myNewArray =[200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([99, 89, 44, 20]));

function cartPrice(val1, val2, ...num){
    console.log(`val1: ${val1} and val2: ${val2} `)
    console.log("num:",...num)
}

// cartPrice(100, 200, 600, 500, 199);


