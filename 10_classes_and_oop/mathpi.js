// console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);


const chai ={
    name:'milk tea',
    price: 250,
    isAvailable: true,

    isChaiReady : function readyChai(){
        console.log("not ready");
    }
}

// chai.name = "lokesh";
// console.log(chai);


console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// this will not change the property
// console.log(Object.getOwnPropertyDescriptor(chai, 'name').configurable);
// Object.getOwnPropertyDescriptor(chai, 'name').configurable= false;
// console.log(Object.getOwnPropertyDescriptor(chai, 'name').configurable);



Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// this will not work as writable is false
// chai.name = "lokesh";
// console.log(chai);

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
