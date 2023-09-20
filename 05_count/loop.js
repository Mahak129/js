//for loops

// for(let i = 0; i<= 10 ; i++){
//   const element = i;
//   if(element == 5){
//     console.log("5 is the best number")
//     continue;
//   }
//   console.log(element)
// }

// //nested loop

// for(let i = 0;i<=10; i++){
//     console.log(`outer loop value:${i}`)
//     for(let j= 1; j<= 10; j++){
//         console.log(`Inner loop value ${j} and inner loop ${i}`)
//         // console.log(i+'*'+j+'='+i*j)
//     }
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

// for(let index = 0; index<myArray.length;index++){
//     console.log(myArray[index])
// }

//break and continue

for(let index = 1; index<=10; index++){
    if(index == 3){
        break;
    }
    console.log(index)
}

for(let index = 1; index<=10; index++){
    if(index == 5){
        continue//except that value, loop will continue
    }
    console.log(index)
}

