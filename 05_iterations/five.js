const coding =["py", "java", "js", "rb", "cpp", "c"]

coding.forEach( function (item) {
    // console.log(item);


} )


coding.forEach((item)=>{
    // console.log(item);
})


function printme(item){
    // console.log(item);
}

coding.forEach(printme);


coding.forEach( (item, index, arrayList)=>{
    // console.log(item, index, arrayList);
})


const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

// console.log(myCoding);

myCoding.forEach((item)=>{

    for (const key in item) {
        console.log(`Key : ${key} && item[${key}] : ${item[key]}`);
    }
    // console.log(`Language Name : ${item.languageFileName} and   Language File Name : ${item.languageFileName}`);


})


