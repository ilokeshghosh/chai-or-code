// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(Date.now());
// console.log(Date.parse());


// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 2)
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("05-14-2023");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})