//chote bdo se iceream le shkte h but bde choto se nhi
//child ke function can access parents variable
// function one(){

//     const username = "mahak"
//     function two(){
//         const website = "youtube"
//         console.log(username);//two can acces one
//     }

//     // console.log(website);
//     // two()
// }
// one()   



// if(true){
//     const username = "hitesh"
//     if(username==="hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }



//++++++++++++++++++interesting+++++++++++++++++++

function addone(num){
    return num+1
}

console.log(addone(5))
//both are valid
console.log(addone(5))//before declaaring
function addone(num){
    return num+1
}


//holding in a varibale

// const addTwo = function(num){
//     return num + 2;
// }

// console.log(addTwo(5))

console.log(addTwo(5))//addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
