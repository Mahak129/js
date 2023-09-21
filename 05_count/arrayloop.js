const coding =["js","ruby","java","python","cpp"]
// coding.forEach(function(val){
//     console.log(val)
// })

//arrow function on array
//call back function
// coding.forEach((item)=>{
//     console.log(item)
// }
// )


// array.forEach(element => {
    
// });


// defining phle hi function
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//with item it also return index and array
// coding.forEach(( item,index,arr)=>{
//     console.log(item,index,arr);
// })


// ["","",""]
// [{},{},{}]

const myCoding = [
    {
        languageName:"javascript",
        langugaFileName:"js"
    },
    {
        languageName:"computerPlusPlus",
        langugaFileName:"cpp"
    },
    {
        languageName:"python",
        langugaFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})