const numbers =[1,2,3,4,5,6,7,8,9,10]

const newNums = numbers.map((num)=>{return num+10})
console.log(newNums)

const n3=
numbers.forEach((n1)=>{return n1+2})
console.log(n3)


const nextDemo =numbers.map((num)=>num*10)
                      .map((num)=>num+1)
                      .filter((num)=>num>=30)
                      console.log(nextDemo)