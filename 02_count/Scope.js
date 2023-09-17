//we have three type of data type let const and var

//and it is fully defined n the story of scope
 let a = 300//global scope mai hai
 var c = 300//fhie bhi 30 print hoga
 
if(true){
    let a = 10
    const b = 20//inside loop scope
    var c = 30
}

console.log(a)//ReferenceError: a is not defined
//console.log(b)//ReferenceError: b is not defined
console.log(c) //no errror : there is no scope