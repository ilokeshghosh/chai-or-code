// singleton
// Object.create();

// object literals
let symb = Symbol("key1");
let user={
   name: "Lokesh",
   [symb]:"value1",
   "full name":"Lokesh Ghosh",
   age:18,
   location:"Kolkata",
   email:"lokesh@ghosh.com",
   isLoggedIn:false, 
}

// console.log(user.email);
// console.log(user["age"]);
// console.log(user["full name"]);
// console.log(user[symb]);   //printing symbol as key in object

user.email = "ghoshlokesh@gmail.com";
// console.log(user);
user["email"] = "ghosh@lokesh@gmail.com";
// console.log(user);

// Object.freeze(user);
user.age=22;
// console.log(user);

let a=user;
a.age=30;
// console.log(user)


user.greeting = function(){
    console.log("Hello User");
}
// console.log(user.greeting);
// console.log(user.greeting());

user.greetingTwo = function(){
    // console.log(`Hello User, ${this["full name"]}`);

}

// console.log(user.greetingTwo());


// documentation 
const person={
    name:"lokesh",
    age:20,
    location:"Kolkata"
};

for(let x in person){
    console.log(`${x}: ${person[x]}`);
}

delete person.age
console.log(person)


