function sayName(){
    //wrapping in one function instead of writing in differnt console

    console.log("M");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("K");
}
// sayName();


//passing parameter in function
//and argument during execution

// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     // return result;//return will save the value but, and when you will console.log outside
//          console.log(result);
// }
// let save = addTwoNumbers(5,8);
// console.log(save);



// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumbers(3,5)
// console.log(result);
// console.log("Result",result);//will print the string as it is



// function loginUserMessage(userName){//usernmae="sam " default
//     if(!userName)//which also means userName == undefined
//     {
//      console.log("Please enter a username");
//      return
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("mahak"));
// console.log(loginUserMessage(""));



//part--2
//when no. of parameter are not defined we will use REST operator

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200));



//what if we have 3/4 parameter
function calculateCartPrice(...num1){ //rest operator  ;--will return an array
    return num1
}

//  console.log(calculateCartPrice(200,400,500))



//different case

function calculateCartPrice(val1, val2,...num1){ //rest operator  ;--will return an array
    return num1
}

// console.log(calculateCartPrice(200,400,500))


// //object passing in function


// const user = {
//     username:"hitesh",
//     price:199
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
// }

// // handleObject(user)


// handleObject({
//     username:"sam",
//     price:399
// })//pasising object

//passing array
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,500,1000]))

