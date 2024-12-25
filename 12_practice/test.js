function abc(){
    console.log(abc.xyz);
    
}

// abc(); 
abc.xyz = 400;
abc.xyz = 200;
// abc();

function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2;
multipleBy5.lokesh = "lokesh";

// console.log(multipleBy5);
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.lokesh);
// console.log(multipleBy5.prototype);


function SetUsername(username){
    // complex DB calls
    this.username = username;
    // console.log(username)
    console.log("called");

}


function createUser(username, email, password){
    // this.username = username
    SetUsername.call(this, username);
    console.log(this.username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123');
console.log(chai);
//output : 
/*
called
createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
*/