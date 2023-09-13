//primitive
// 7 types: Call by value , original referenced of the memeory is not given
//changes are made in copy

// String
// Number
// Boolean
// null
// undefined
// symbol
//BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
//const bignumber = 4549556945n

//Reference type(Non primitive)

//Array
//Objects
//Fucntions
//dynamically typed language
const heros = ["shaktiman","naagraj","doga"];//Array 

//object
let myObj = { 
    name:"hitesh",
    age:22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object