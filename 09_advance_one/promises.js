// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, crypography, newtwork
//     setTimeout(()=>{
//         console.log("Async task is compelete")
//         resolve();
//     },1000)
// });


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log("Async Task 2 compelete")
//         // console.log("hi");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("Async task 2 is consumed");
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: "lokesh", email : "lokesh@gmail.com"})
//     }, 1000);
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){

//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"lokesh", password:"123"});
//         }else{
//             reject('ERROR Something went wrong')
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected "))


// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"js", password:"123"});
//         }else{
//             reject('ERROR : js went wrong')
//         }
//     },2000)
// });

// async function consumePromiseFive(){
//    try{
//     const response = await promiseFive
//     console.log(response);
//    }catch(error){
//     console.log(error);
//    }
// }

// consumePromiseFive();

// async function getdata(){
//     try{
//         const response = await fetch('https://api.github.com/users/ilokeshghosh');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }

// getdata();



fetch('https://api.github.com/users/ilokeshghosh')
.then((respose)=>{
    // console.log(respose.login);
    return respose.json();
}).then((data)=>{
    console.log(data.login)
})
.catch((error)=>{
    console.log("Error");
})