let myName = "hitesh    "
// console.log(myName.truelength());


let myHeros =["thor", "hulk"]

let heroPower ={
    thor:"hammer",
    hulk:"muscle",
    getPower:function(){
        console.log(`thor power : ${this.thor} and hulk power : ${this.hulk}`);
    }
}

Object.prototype.lokesh = function(){
    console.log(`lokesh is present in all objects`);
}

Array.prototype.heyLokesh = function(){
    console.log(`Lokesh says hello`);
}
// console.log(heroPower.getPower());

// heroPower.lokesh();
// myHeros.lokesh();
// myHeros.heyLokesh();
// heroPower.heyLokesh();


// inheritance

const User={
    name : 'chai',
    email: 'chai@chai.com'
}

const Teacher = {
    makeVideo : true
}


const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__ :TeachingSupport

}

Teacher.__proto__ = User;


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport will access all property of Teacher

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();

"lokesh".trueLength();
"Tea".trueLength();