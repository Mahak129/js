//current context used for this

// const user ={
//     username : "hitesh",
//      price:999,

//      welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this)


//     }
// }
// user.welcomeMessage()

// user.username = "Sam"//context is changed 
// user.welcomeMessage()
// console.log(this)//empty object

 
//arrow function mai this nhi hota


//this cannot be used inside a function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//writing arrow function


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); //normal function
// }


const chai = ()=>{
    let username = "hitesh"
    console.log(this); //arrow function
}
// chai()

//implicit

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2
const addTwo = (num1,num2)=> (num1+ num2)// no need to write return keyword

console.log(addTwo(3,4))
//returning object
const addTwo2 = (num1,num2)=> ({username:"mahak"})



//explicit return type

 