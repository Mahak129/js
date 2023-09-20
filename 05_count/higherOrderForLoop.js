//for of loop
const arr = [1,2,3,4,5]

// for (const iterator of object) {
//     //itertor here can be any name 
//     //object can be array, string,object

// }
 
// for (const num of arr) {
//     console.log(num)
// }
//can be applied on string

// const str = "Mahak"
// for(const num of str){
//     console.log(`each char of string are ${num}`)
// }


//maps  no duplicate value always unique value
//stroed in same order

const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of America")
map.set('Fr',"france")
map.set('IN',"India")

// console.log(map)
//loop on map
for(const key of map){
console.log(key)//whole key avalue pair
}

//want key and values as a pair

for(const [key,value] of map){
    console.log(key,':-',value)
}

//loop on object

const myObject = {
    'game1':'NFS',
    'game2':'spiderMan'
}

for(const [key,value] of myObject){//TypeError: myObject is not iterable
    console.log(key,':',value)
}

