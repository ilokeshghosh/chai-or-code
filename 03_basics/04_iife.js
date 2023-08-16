// Immediately Invoked Function Expressions (IIFE)


//Normal function
function chai(){
    console.log("this is chai function");
}
chai();

// this is named iife
(function code(){
    console.log("This is code function");
})();

// this unnamed iife
((name)=>{
    console.log(`Hey ${name} welcome to js course`);
})("Lokesh");