const user1 = new Object();
// const user1 = {}

user1.name = "Lokesh Ghosh";
user1.age="20";
// console.log(`Name of user is : ${user1.name} and age of user is : ${user1.age}`);

const user2 = {
    email:"lokesh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"lokesh",
            lastname:"ghosh"
        }
    }
};

// console.log(user2.fullname.userfullname.firstname);

const obj1 ={
    1:"a", 2:"b"
}

const obj2 ={
    3:"c", 4:"d"
}

// const obj3={obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const user3 =[
    {
        name:"a",
        age:1
    },
    {
        
        name:"b",
        age:2
    },
    {
        name:"c",
        age:3
    }
];

// console.log(user3[1].age);

// console.log(user1);
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));
// console.log(user1.hasOwnProperty('age'));


const course = {
   courseName:"js in hindi",
   price:"999",
   courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course
console.log(instructor);


// json structure

// {
//     "name":"lokesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
