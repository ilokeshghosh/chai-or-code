const myObject ={
    "JS":"javascript",
    "CPP":"C++",
    "RB":"Ruby"
}

for (const key in myObject) {
//    console.log(`${myObject[key]} is shortform of : ${key}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    
    // console.log(`key:${key} and programming[${key}] : ${programming[key]}`);
}


const maps = new Map();
maps.set("IND", "India")
maps.set("BR", "Brazil")
maps.set("FR", "France")
maps.set("IND", "India")
console.log(maps);
for (const key in maps) {
   console.log(key);
}