let name="lokesh";
let score=50;
console.log("My name is ",name+", my score is "+score); //old syntax

console.log(`Hello my name is ${name} and my score is ${score}`) //new syntax

let gameName= new String("lokesh-ghosh ");

console.log(gameName.at(-2));
console.log(gameName.charAt(2));
console.log(gameName.charCodeAt(2));
console.log(gameName.codePointAt(2));
console.log(gameName.concat(".com"));
console.log(gameName.endsWith("sh"));
console.log(String.fromCharCode(97,98,99,100));
console.log(gameName.includes("ghosh"));
console.log(gameName.indexOf("k"));
console.log(gameName.lastIndexOf('o'));
console.log(gameName.padEnd(15,"."));
console.log(gameName.padStart(15,"."));
console.log(`My name is ${gameName.repeat(2)} `);
console.log(gameName.replace("-"," "));
console.log(gameName.replaceAll("o"," "))
console.log(gameName.search("o"));
console.log(gameName.slice(7));
console.log(gameName.split("-"));
console.log(gameName.startsWith("l"));
console.log("LOKESH".toLowerCase());
console.log(gameName.toUpperCase());
console.log('d'.toString());
console.log("     hello world   ".trim());
console.log("     hello world   ".trimEnd());
console.log("     hello world   ".trimStart());

