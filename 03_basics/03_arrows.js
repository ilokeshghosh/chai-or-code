const user={
    username:"lokesh",
    price :444,
    message:function(){
        console.log(`Hey ${this.username} thank you for registering `);
        console.log(this);
    }


}

// user.message();
// user.username="ghosh";
// user.message();


function newFun(){
    console.log(this);
}
// newFun();

function newFun2(){
    let username="Lokesh"
    console.log(this.username);
}

// newFun2();


// const newFun3 = function(){
//     let username="Lokesh"
//     console.log(this.username);
    
// }

const newFun3 = () =>{
    let username="Lokesh"
    console.log(this);
    
}

// newFun3();

// const addTwo=(num1, num2) =>{
//     return num1+num2
// }


// const addTwo=(num1, num2) =>  num1+num2

const addTwo=(num1, num2) =>  (num1+num2)

// const addTwo=(num1, num2) =>  ({username:"Lokesh"})





console.log(addTwo(4,2));