const user ={
    username:"lokesh",
    loginCount : 5,
    signedIn: true,

    getUserDetails:function(){
        // console.log('Got User Details')
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this); //output = {}
// console.log(globalThis)

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this;

}


const userOne = new User("lokesh", 12, true)
const userTwo = new User("ghosh", 20, false);
// console.log(userOne);
userOne.greeting();                 
console.log(userOne.constructor);                                
// console.log(userTwo);



// step 1 = create new object
// step 2 = constructor function is called
// step 3 = all arguments are injected in this 