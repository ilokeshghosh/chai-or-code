const myNums =[1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc+currval;
// }, 3)


// const myTotal = myNums.reduce((acc, curr)=> acc+curr , 0)

// console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:4999
    },
    {
        itemName: "java course",
        price:3999
    }
]

// const coursePrice= shoppingCart.map((item)=> item.price)
// const totalAmount = coursePrice.reduce((acc, curr)=>acc+curr,0)

// OR

// const totalAmount = shoppingCart.reduce((acc, item)=> acc+item.price, 0);

console.log(totalAmount);
