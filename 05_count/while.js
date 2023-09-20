let  i = 1
while(i <=10){
    console.log(i)//initilization is outside
    i+=2
}



let myArray = ['flash',"batman","superman"]
let arr = 0
while(arr<myArray.length){
console.log(myArray[arr])
arr++
}

let score = 11
do{
    console.log(`Score is ${score}`);
    score++//will run once no matter what is the condition
}while(score<=10)