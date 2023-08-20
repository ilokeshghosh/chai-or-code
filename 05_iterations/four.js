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


const map = new Map();
map.set("IND", "India")
map.set("BR", "Brazil")
map.set("FR", "France")
map.set("IND", "India")

for (const key in map) {
   console.log(key);
}