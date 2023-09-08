var a=10;
let b=20;
const c=30;

if(true){
    let b=900;
    const c=500;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="lokesh"
    function two(){
        const website = "github.com"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();


if(true){
    const username = "Lokesh"
    if(username == "Lokesh"){
        const website =" youtube"
        // console.log(username+website);
    }
    // console.log(website);

}

// console.log(username);


// ****************interesting**********************
// addone(5);
function addone(num){
    return num+1;
}

// addTwo(4)
const addTwo = function(num){
    return num+2;
}


// Automatically Global
myFunction();

// code here can use carName
console.log(carName);
function myFunction() {
 carName = "Volvo";
}