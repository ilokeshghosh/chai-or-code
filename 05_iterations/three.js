// for of

//["", "", ""]
//[{}, {}, {}]


const arr=[1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}


const greetings = "Hello World"
for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    // console.log(`Each char is : ${greet}`);
}


// Maps

const map = new Map();
map.set("IND", "India")
map.set("BR", "Brazil")
map.set("FR", "France")
map.set("IND", "India")

// console.log(map);

for(const [key, value] of map){
    // console.log(`key is : ${key} and value is : ${value}`);
}

const myObject ={
    "game1":"NFS",
    "game2":"GTA"
}

for (const key of myObject) {
    console.log(myObject);
    
}