let marvel_heros =["thor", "ironman", "hulk"];
let dc_heros=["superman", "flash", "batman"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


let all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

let all_nheros = [...marvel_heros, ...dc_heros];
// console.log(all_nheros)


let another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(1))
// console.log(another_array.flat(Infinity))


// console.log(Array.isArray("lokesh"))
// console.log(Array.from("lokesh"))
// console.log(Array.from({name: "lokesh"}))  //interesting case(can't be converted in to array)

let s1= 100
let s2=200
let s3=300
console.log(Array.of(s1, s2, s3));


